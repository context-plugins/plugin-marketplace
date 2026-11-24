import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScheduleStatus = {
  Scheduled: "scheduled",
  Postponed: "postponed",
  Cancelled: "cancelled",
} as const;
export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus] | (string & {});

export const scheduleStatusSchema: EnumSchema<ScheduleStatus> = s.enumOf<ScheduleStatus>(ScheduleStatus);
