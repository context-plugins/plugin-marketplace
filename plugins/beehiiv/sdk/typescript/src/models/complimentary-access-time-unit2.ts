import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The unit of time for the gift duration. */
export const ComplimentaryAccessTimeUnit2 = {
  Days: "days",
  Months: "months",
  Years: "years",
  Forever: "forever",
} as const;
export type ComplimentaryAccessTimeUnit2 =
  | (typeof ComplimentaryAccessTimeUnit2)[keyof typeof ComplimentaryAccessTimeUnit2]
  | (string & {});

export const complimentaryAccessTimeUnit2Schema: EnumSchema<ComplimentaryAccessTimeUnit2> =
  s.enumOf<ComplimentaryAccessTimeUnit2>(ComplimentaryAccessTimeUnit2);
