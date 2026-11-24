import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The unit of measure that applies to the minimumValue and maximumValue values e.g. a DOLLAR
 * amount. PERCENT (in the case of loan-to-value ratio or LVR). Tier term period representing a
 * discrete number of MONTH's or DAY's (in the case of term deposit tiers).
 */
export const UnitOfMeasure = {
  Day: "DAY",
  Dollar: "DOLLAR",
  Month: "MONTH",
  Percent: "PERCENT",
} as const;
export type UnitOfMeasure = (typeof UnitOfMeasure)[keyof typeof UnitOfMeasure] | (string & {});

export const unitOfMeasureSchema: EnumSchema<UnitOfMeasure> = s.enumOf<UnitOfMeasure>(UnitOfMeasure);
