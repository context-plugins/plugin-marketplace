import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Type of filter. */
export const Type1 = {
  FilterTypeUnspecified: "FILTER_TYPE_UNSPECIFIED",
  UnitOnly: "UNIT_ONLY",
  UnitAndAmount: "UNIT_AND_AMOUNT",
  AnnualizedBaseAmount: "ANNUALIZED_BASE_AMOUNT",
  AnnualizedTotalAmount: "ANNUALIZED_TOTAL_AMOUNT",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
