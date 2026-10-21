import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The wallet used when creating the payment. */
export const PaymentDetailsWalletResponse = {
  Applepay: "applepay",
  Googlepay: "googlepay",
} as const;
export type PaymentDetailsWalletResponse =
  | (typeof PaymentDetailsWalletResponse)[keyof typeof PaymentDetailsWalletResponse]
  | (string & {});

export const paymentDetailsWalletResponseSchema: EnumSchema<PaymentDetailsWalletResponse> =
  s.enumOf<PaymentDetailsWalletResponse>(PaymentDetailsWalletResponse);
