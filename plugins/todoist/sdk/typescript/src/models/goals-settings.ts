import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { streakInfoSchema, type StreakInfo } from "./streak-info.js";

/** User goals and settings. */
export type GoalsSettings = {
  /** User ID (legacy field, same as user_id) */
  user: string;
  /** User ID */
  userId: string;
  /** Daily task completion goal set by the user */
  dailyGoal: number;
  /** Weekly task completion goal set by the user */
  weeklyGoal: number;
  /** List of weekday numbers (0=Sunday, 1=Monday, ..., 6=Saturday) excluded from daily goals */
  ignoreDays: number[];
  /** Vacation mode status (0=disabled, 1=enabled) */
  vacationMode: number;
  /** Karma tracking status (0=enabled, 1=disabled) */
  karmaDisabled: number;
  /** Current consecutive daily completion streak */
  currentDailyStreak: StreakInfo;
  /** Current consecutive weekly completion streak */
  currentWeeklyStreak: StreakInfo;
  /** Previous daily streak (before the current one) */
  lastDailyStreak: StreakInfo;
  /** Previous weekly streak (before the current one) */
  lastWeeklyStreak: StreakInfo;
  /** Longest daily streak achieved by the user */
  maxDailyStreak: StreakInfo;
  /** Longest weekly streak achieved by the user */
  maxWeeklyStreak: StreakInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalsSettingsSchema: Schema<GoalsSettings> = s.object<GoalsSettings>(
  {
    user: s.string(),
    userId: s.string(),
    dailyGoal: s.int(),
    weeklyGoal: s.int(),
    ignoreDays: s.array(s.int()),
    vacationMode: s.int(),
    karmaDisabled: s.int(),
    currentDailyStreak: streakInfoSchema,
    currentWeeklyStreak: streakInfoSchema,
    lastDailyStreak: streakInfoSchema,
    lastWeeklyStreak: streakInfoSchema,
    maxDailyStreak: streakInfoSchema,
    maxWeeklyStreak: streakInfoSchema,
    _keysMap: {
      userId: "user_id",
      dailyGoal: "daily_goal",
      weeklyGoal: "weekly_goal",
      ignoreDays: "ignore_days",
      vacationMode: "vacation_mode",
      karmaDisabled: "karma_disabled",
      currentDailyStreak: "current_daily_streak",
      currentWeeklyStreak: "current_weekly_streak",
      lastDailyStreak: "last_daily_streak",
      lastWeeklyStreak: "last_weekly_streak",
      maxDailyStreak: "max_daily_streak",
      maxWeeklyStreak: "max_weekly_streak",
    },
  },
  { additionalProperties: s.json() },
);
