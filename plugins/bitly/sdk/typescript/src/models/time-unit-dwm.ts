import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** the unit of time queried for (day, week, month) */
export const TimeUnitDwm = {
  Day: "day",
  Week: "week",
  Month: "month",
} as const;
export type TimeUnitDwm = (typeof TimeUnitDwm)[keyof typeof TimeUnitDwm] | (string & {});

export const timeUnitDwmSchema: EnumSchema<TimeUnitDwm> = s.enumOf<TimeUnitDwm>(TimeUnitDwm);
