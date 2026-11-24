import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductCreditBenefitInputRecipient = {
  Organization: "organization",
  Seat: "seat",
} as const;
export type ProductCreditBenefitInputRecipient =
  | (typeof ProductCreditBenefitInputRecipient)[keyof typeof ProductCreditBenefitInputRecipient]
  | (string & {});

export const productCreditBenefitInputRecipientSchema: EnumSchema<ProductCreditBenefitInputRecipient> =
  s.enumOf<ProductCreditBenefitInputRecipient>(ProductCreditBenefitInputRecipient);
