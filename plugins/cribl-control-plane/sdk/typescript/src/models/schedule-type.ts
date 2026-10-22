import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select a schedule type; either an interval (in seconds) or a cron-style schedule. */
export const ScheduleType = {
  Interval: "interval",
  CronSchedule: "cronSchedule",
} as const;
export type ScheduleType = (typeof ScheduleType)[keyof typeof ScheduleType] | (string & {});

export const scheduleTypeSchema: EnumSchema<ScheduleType> = s.enumOf<ScheduleType>(ScheduleType);
