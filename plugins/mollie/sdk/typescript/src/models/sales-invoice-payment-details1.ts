import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  salesInvoicePaymentDetailsSourceSchema,
  type SalesInvoicePaymentDetailsSource,
} from "./sales-invoice-payment-details-source.js";

/**
 * Used when setting an invoice to status of `paid`, and will store a payment that fully pays the
 * invoice with the provided details. Required for `paid` status.
 */
export type SalesInvoicePaymentDetails1 = {
  /** The way through which the invoice is to be set to paid. */
  source: SalesInvoicePaymentDetailsSource;
  /**
   * A reference to the payment the sales invoice is paid by. Required for `source` values
   * `payment-link` and `payment`.
   */
  sourceReference?: string | null;
};

export const salesInvoicePaymentDetails1Schema: Schema<SalesInvoicePaymentDetails1> =
  s.object<SalesInvoicePaymentDetails1>({
    source: salesInvoicePaymentDetailsSourceSchema,
    sourceReference: s.optionalNullable(s.string()),
  });
