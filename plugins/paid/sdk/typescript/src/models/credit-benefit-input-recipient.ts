import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreditBenefitInputRecipient = {
  Organization: "organization",
  Seat: "seat",
} as const;
export type CreditBenefitInputRecipient =
  | (typeof CreditBenefitInputRecipient)[keyof typeof CreditBenefitInputRecipient]
  | (string & {});

export const creditBenefitInputRecipientSchema: EnumSchema<CreditBenefitInputRecipient> =
  s.enumOf<CreditBenefitInputRecipient>(CreditBenefitInputRecipient);
