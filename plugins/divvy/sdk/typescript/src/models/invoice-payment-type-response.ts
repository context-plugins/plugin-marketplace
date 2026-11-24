import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Record AR payment type. */
export const InvoicePaymentTypeResponse = {
  Cash: "CASH",
  Check: "CHECK",
  CreditCard: "CREDIT_CARD",
  Ach: "ACH",
  Paypal: "PAYPAL",
  Other: "OTHER",
  Wallet: "WALLET",
  VirtualCard: "VIRTUAL_CARD",
  Undefined: "UNDEFINED",
} as const;
export type InvoicePaymentTypeResponse =
  | (typeof InvoicePaymentTypeResponse)[keyof typeof InvoicePaymentTypeResponse]
  | (string & {});

export const invoicePaymentTypeResponseSchema: EnumSchema<InvoicePaymentTypeResponse> =
  s.enumOf<InvoicePaymentTypeResponse>(InvoicePaymentTypeResponse);
