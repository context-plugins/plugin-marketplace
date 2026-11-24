import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Schedule recurrence type. Accepts WEEKLY or MONTHLY and defaults to WEEKLY. */
export const ScheduleType = {
  Weekly: "WEEKLY",
  Monthly: "MONTHLY",
} as const;
export type ScheduleType = (typeof ScheduleType)[keyof typeof ScheduleType] | (string & {});

export const scheduleTypeSchema: EnumSchema<ScheduleType> = s.enumOf<ScheduleType>(ScheduleType);
