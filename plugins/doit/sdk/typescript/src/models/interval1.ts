import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Interval1 = {
  Day: "day",
  Week: "week",
  Month: "month",
} as const;
export type Interval1 = (typeof Interval1)[keyof typeof Interval1] | (string & {});

export const interval1Schema: EnumSchema<Interval1> = s.enumOf<Interval1>(Interval1);
