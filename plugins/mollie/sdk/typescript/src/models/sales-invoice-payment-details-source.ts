import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The way through which the invoice is to be set to paid. */
export const SalesInvoicePaymentDetailsSource = {
  Manual: "manual",
  PaymentLink: "payment-link",
  Payment: "payment",
} as const;
export type SalesInvoicePaymentDetailsSource =
  | (typeof SalesInvoicePaymentDetailsSource)[keyof typeof SalesInvoicePaymentDetailsSource]
  | (string & {});

export const salesInvoicePaymentDetailsSourceSchema: EnumSchema<SalesInvoicePaymentDetailsSource> =
  s.enumOf<SalesInvoicePaymentDetailsSource>(SalesInvoicePaymentDetailsSource);
