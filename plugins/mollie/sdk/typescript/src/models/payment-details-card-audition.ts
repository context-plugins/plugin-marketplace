import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The card's target audience, if known. */
export const PaymentDetailsCardAudition = {
  Consumer: "consumer",
  Business: "business",
} as const;
export type PaymentDetailsCardAudition =
  | (typeof PaymentDetailsCardAudition)[keyof typeof PaymentDetailsCardAudition]
  | (string & {});

export const paymentDetailsCardAuditionSchema: EnumSchema<PaymentDetailsCardAudition> =
  s.enumOf<PaymentDetailsCardAudition>(PaymentDetailsCardAudition);
