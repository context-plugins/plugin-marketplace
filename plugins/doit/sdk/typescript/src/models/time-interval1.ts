import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The period each evaluation looks at. Omission preserves the saved interval. */
export const TimeInterval1 = {
  Day: "day",
  Week: "week",
  Month: "month",
  Quarter: "quarter",
  Year: "year",
} as const;
export type TimeInterval1 = (typeof TimeInterval1)[keyof typeof TimeInterval1] | (string & {});

export const timeInterval1Schema: EnumSchema<TimeInterval1> = s.enumOf<TimeInterval1>(TimeInterval1);
