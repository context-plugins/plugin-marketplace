import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  salesInvoicePaymentDetailsSourceSchema,
  type SalesInvoicePaymentDetailsSource,
} from "./sales-invoice-payment-details-source.js";

export type SalesInvoicePaymentDetails = {
  /** The way through which the invoice is to be set to paid. */
  source: SalesInvoicePaymentDetailsSource;
  /**
   * A reference to the payment the sales invoice is paid by. Required for `source` values
   * `payment-link` and `payment`.
   */
  sourceReference?: string | null;
};

export const salesInvoicePaymentDetailsSchema: Schema<SalesInvoicePaymentDetails> =
  s.object<SalesInvoicePaymentDetails>({
    source: salesInvoicePaymentDetailsSourceSchema,
    sourceReference: s.optionalNullable(s.string()),
  });
