import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Interval2 = {
  _1D: "1d",
} as const;
export type Interval2 = (typeof Interval2)[keyof typeof Interval2] | (string & {});

export const interval2Schema: EnumSchema<Interval2> = s.enumOf<Interval2>(Interval2);
