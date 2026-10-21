import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The way through which the invoice is to be set to paid. */
export const SalesInvoicePaymentDetailsSourceResponse = {
  Manual: "manual",
  PaymentLink: "payment-link",
  Payment: "payment",
} as const;
export type SalesInvoicePaymentDetailsSourceResponse =
  | (typeof SalesInvoicePaymentDetailsSourceResponse)[keyof typeof SalesInvoicePaymentDetailsSourceResponse]
  | (string & {});

export const salesInvoicePaymentDetailsSourceResponseSchema: EnumSchema<SalesInvoicePaymentDetailsSourceResponse> =
  s.enumOf<SalesInvoicePaymentDetailsSourceResponse>(SalesInvoicePaymentDetailsSourceResponse);
