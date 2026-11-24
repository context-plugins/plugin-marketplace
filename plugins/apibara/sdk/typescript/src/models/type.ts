import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type = {
  Insurance: "insurance",
  NonInsurance: "non_insurance",
  Finance: "finance",
  Dealer: "dealer",
  Unknown: "unknown",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
