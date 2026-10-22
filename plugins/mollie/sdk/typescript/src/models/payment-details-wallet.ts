import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The wallet used when creating the payment. */
export const PaymentDetailsWallet = {
  Applepay: "applepay",
  Googlepay: "googlepay",
} as const;
export type PaymentDetailsWallet =
  | (typeof PaymentDetailsWallet)[keyof typeof PaymentDetailsWallet]
  | (string & {});

export const paymentDetailsWalletSchema: EnumSchema<PaymentDetailsWallet> =
  s.enumOf<PaymentDetailsWallet>(PaymentDetailsWallet);
