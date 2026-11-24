import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of time period that the timeValue field represents. */
export const TimeDimension = {
  Hours: "Hours",
  Days: "Days",
  Weeks: "Weeks",
} as const;
export type TimeDimension = (typeof TimeDimension)[keyof typeof TimeDimension] | (string & {});

export const timeDimensionSchema: EnumSchema<TimeDimension> = s.enumOf<TimeDimension>(TimeDimension);
