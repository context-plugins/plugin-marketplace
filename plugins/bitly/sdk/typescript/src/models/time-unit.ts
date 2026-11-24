import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** the unit of time queried for (minute, hour, day, week, month) */
export const TimeUnit = {
  Minute: "minute",
  Hour: "hour",
  Day: "day",
  Week: "week",
  Month: "month",
} as const;
export type TimeUnit = (typeof TimeUnit)[keyof typeof TimeUnit] | (string & {});

export const timeUnitSchema: EnumSchema<TimeUnit> = s.enumOf<TimeUnit>(TimeUnit);
