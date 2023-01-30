import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import clsx from "clsx";

import { api } from "../lib/axios";
import { generateProgressPercentage } from "../utils/generate-progress-percentage";

import { BackButton } from "../components/BackButton";
import { ProgressBar } from "../components/ProgressBar";
import { Checkbox } from "../components/Checkbox";
import { Loading } from "../components/Loading";
import { HabitsEmpty } from "../components/HabitsEmpty";

interface Params {
  date: string;
}

interface HabitsInfo {
  possibleHabits: Array<{
    id: string;
    title: string;
    created_at: string;
  }>;
  completedHabits: string[];
}

export function Habit() {
  const [loading, setLoading] = useState(true);
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>({
    possibleHabits: [],
    completedHabits: [],
  });

  const route = useRoute();
  const { date } = route.params as Params;

  const parsedDate = dayjs(date);
  // This will put the date in the last second of the day (23:59:59.999)
  const isDateInPast = parsedDate.endOf("day").isBefore(new Date());
  const dayOfWeek = parsedDate.format("dddd");
  const dayAndMonth = parsedDate.format("DD/MM");

  const completedPercentage = habitsInfo.possibleHabits.length
    ? generateProgressPercentage(
        habitsInfo.possibleHabits.length,
        habitsInfo.completedHabits.length
      )
    : 0;

  const fetchHabits = async () => {
    try {
      setLoading(true);
      const response = await api.get("/day", { params: { date } });
      setHabitsInfo(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Ops",
        "Não foi possível carregar as informações dos hábitos."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleToggleHabit = async (habitId: string) => {
    try {
      await api.patch(`/habits/${habitId}/toggle`);

      const isHabitAlreadyCompleted =
        habitsInfo.completedHabits.includes(habitId);

      if (isHabitAlreadyCompleted) {
        setHabitsInfo((prevState) => {
          return {
            possibleHabits: prevState.possibleHabits,
            completedHabits: prevState.completedHabits.filter(
              (id) => id !== habitId
            ),
          };
        });
      } else {
        setHabitsInfo((prevState) => {
          return {
            possibleHabits: prevState.possibleHabits,
            completedHabits: [...prevState.completedHabits, habitId],
          };
        });
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Ops", "Não foi possível atualizar o status do hábito.");
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>

        <Text className="text-white font-extrabold text-3xl">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={completedPercentage} />

        <View
          className={clsx("mt-6", {
            "opacity-50": isDateInPast,
          })}
        >
          {habitsInfo.possibleHabits.length ? (
            habitsInfo.possibleHabits.map((habit) => {
              return (
                <Checkbox
                  key={habit.id}
                  title={habit.title}
                  isChecked={habitsInfo.completedHabits.includes(habit.id)}
                  disabled={isDateInPast}
                  onPress={() => handleToggleHabit(habit.id)}
                />
              );
            })
          ) : (
            <HabitsEmpty />
          )}
        </View>
        {isDateInPast && (
          <Text className="text-white mt-10 text-center">
            Você não pode editar hábitos de uma data passada.
          </Text>
        )}
      </ScrollView>
    </View>
  );
}
