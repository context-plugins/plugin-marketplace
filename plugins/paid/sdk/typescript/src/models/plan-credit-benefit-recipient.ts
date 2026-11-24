import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PlanCreditBenefitRecipient = {
  Organization: "organization",
  Seat: "seat",
} as const;
export type PlanCreditBenefitRecipient =
  | (typeof PlanCreditBenefitRecipient)[keyof typeof PlanCreditBenefitRecipient]
  | (string & {});

export const planCreditBenefitRecipientSchema: EnumSchema<PlanCreditBenefitRecipient> =
  s.enumOf<PlanCreditBenefitRecipient>(PlanCreditBenefitRecipient);
