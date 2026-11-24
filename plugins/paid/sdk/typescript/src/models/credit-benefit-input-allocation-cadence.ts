import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditBenefitInputAllocationCadence = {
  Upfront: "upfront",
  Monthly: "monthly",
} as const;
export type CreditBenefitInputAllocationCadence =
  | (typeof CreditBenefitInputAllocationCadence)[keyof typeof CreditBenefitInputAllocationCadence]
  | (string & {});

export const creditBenefitInputAllocationCadenceSchema: EnumSchema<CreditBenefitInputAllocationCadence> =
  s.enumOf<CreditBenefitInputAllocationCadence>(CreditBenefitInputAllocationCadence);
