import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The unit of time for the gift duration.<br>`days` - Duration in days.<br>`months` - Duration in
 * months.<br>`years` - Duration in years.<br>`forever` - Lifetime access with no expiration.
 */
export const ComplimentaryAccessTimeUnit = {
  Days: "days",
  Months: "months",
  Years: "years",
  Forever: "forever",
} as const;
export type ComplimentaryAccessTimeUnit =
  | (typeof ComplimentaryAccessTimeUnit)[keyof typeof ComplimentaryAccessTimeUnit]
  | (string & {});

export const complimentaryAccessTimeUnitSchema: EnumSchema<ComplimentaryAccessTimeUnit> =
  s.enumOf<ComplimentaryAccessTimeUnit>(ComplimentaryAccessTimeUnit);
