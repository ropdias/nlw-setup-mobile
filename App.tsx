import "./src/lib/dayjs";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";
import * as Notifications from "expo-notifications";

import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    };
  },
});

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  async function scheduleNotifications() {
    const trigger = new Date();
    // Setting trigger to 19h
    trigger.setHours(19);
    trigger.setMinutes(0);
    trigger.setSeconds(0);
    trigger.setMilliseconds(0);
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Olá, Rodrigo! 🤩",
        body: "Você praticou os seus hábitos hoje?",
      },
      trigger,
    });
  }

  // async function getScheduleNotifications() {
  //   const schedules = await Notifications.getAllScheduledNotificationsAsync();
  //   console.log(schedules);
  // }

  async function cancelAllScheduleNotifications() {
    await Notifications.cancelAllScheduledNotificationsAsync();
  }

  // We can use useEffect to cancel all notifications and re-schedule for the next day at the same time
  useEffect(() => {
    cancelAllScheduleNotifications();
    // getScheduleNotifications();
    scheduleNotifications();
  }, []);

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <>
      <Routes />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
