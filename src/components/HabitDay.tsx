import { TouchableOpacity, Dimensions } from "react-native";

const WEEK_DAYS = 7;

const SCREEN_HORIZONTAL_PADDING = 32 * 2;
const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE =
  (Dimensions.get("screen").width - SCREEN_HORIZONTAL_PADDING) / WEEK_DAYS -
  DAY_MARGIN_BETWEEN;

export function HabitDay() {
  return (
    <TouchableOpacity
      className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
    />
  );
}
