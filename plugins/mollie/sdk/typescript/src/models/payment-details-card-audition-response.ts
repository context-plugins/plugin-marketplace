import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The card's target audience, if known. */
export const PaymentDetailsCardAuditionResponse = {
  Consumer: "consumer",
  Business: "business",
} as const;
export type PaymentDetailsCardAuditionResponse =
  | (typeof PaymentDetailsCardAuditionResponse)[keyof typeof PaymentDetailsCardAuditionResponse]
  | (string & {});

export const paymentDetailsCardAuditionResponseSchema: EnumSchema<PaymentDetailsCardAuditionResponse> =
  s.enumOf<PaymentDetailsCardAuditionResponse>(PaymentDetailsCardAuditionResponse);
