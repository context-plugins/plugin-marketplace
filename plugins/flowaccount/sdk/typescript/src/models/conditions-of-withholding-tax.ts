import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = WithholdsTaxAtSource 2 = PayEveryTime 3 = PayOneTime */
export const ConditionsOfWithholdingTax = {
  _1: 1,
  _2: 2,
  _3: 3,
} as const;
export type ConditionsOfWithholdingTax =
  | (typeof ConditionsOfWithholdingTax)[keyof typeof ConditionsOfWithholdingTax]
  | (number & {});

export const conditionsOfWithholdingTaxSchema: EnumSchema<ConditionsOfWithholdingTax> =
  s.enumOf<ConditionsOfWithholdingTax>(ConditionsOfWithholdingTax);
