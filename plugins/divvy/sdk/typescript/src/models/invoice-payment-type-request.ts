import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Record AR payment type. */
export const InvoicePaymentTypeRequest = {
  Cash: "CASH",
  Check: "CHECK",
  CreditCard: "CREDIT_CARD",
  Ach: "ACH",
  Paypal: "PAYPAL",
  Other: "OTHER",
  Wallet: "WALLET",
  VirtualCard: "VIRTUAL_CARD",
} as const;
export type InvoicePaymentTypeRequest =
  | (typeof InvoicePaymentTypeRequest)[keyof typeof InvoicePaymentTypeRequest]
  | (string & {});

export const invoicePaymentTypeRequestSchema: EnumSchema<InvoicePaymentTypeRequest> =
  s.enumOf<InvoicePaymentTypeRequest>(InvoicePaymentTypeRequest);
