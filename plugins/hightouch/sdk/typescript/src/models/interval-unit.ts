import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IntervalUnit = {
  Minute: "minute",
  Hour: "hour",
  Day: "day",
  Week: "week",
} as const;
export type IntervalUnit = (typeof IntervalUnit)[keyof typeof IntervalUnit] | (string & {});

export const intervalUnitSchema: EnumSchema<IntervalUnit> = s.enumOf<IntervalUnit>(IntervalUnit);
