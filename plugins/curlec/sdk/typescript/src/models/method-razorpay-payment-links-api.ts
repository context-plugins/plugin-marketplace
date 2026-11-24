import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MethodRazorpayPaymentLinksApi = {
  Netbanking: "netbanking",
  Card: "card",
  Wallet: "wallet",
  Upi: "upi",
  Emi: "emi",
  BankTransfer: "bank_transfer",
} as const;
export type MethodRazorpayPaymentLinksApi =
  | (typeof MethodRazorpayPaymentLinksApi)[keyof typeof MethodRazorpayPaymentLinksApi]
  | (string & {});

export const methodRazorpayPaymentLinksApiSchema: EnumSchema<MethodRazorpayPaymentLinksApi> =
  s.enumOf<MethodRazorpayPaymentLinksApi>(MethodRazorpayPaymentLinksApi);
