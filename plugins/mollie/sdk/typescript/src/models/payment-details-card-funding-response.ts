import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The card type. */
export const PaymentDetailsCardFundingResponse = {
  Debit: "debit",
  Credit: "credit",
  Prepaid: "prepaid",
  DeferredDebit: "deferred-debit",
} as const;
export type PaymentDetailsCardFundingResponse =
  | (typeof PaymentDetailsCardFundingResponse)[keyof typeof PaymentDetailsCardFundingResponse]
  | (string & {});

export const paymentDetailsCardFundingResponseSchema: EnumSchema<PaymentDetailsCardFundingResponse> =
  s.enumOf<PaymentDetailsCardFundingResponse>(PaymentDetailsCardFundingResponse);
