import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  salesInvoicePaymentDetailsSourceResponseSchema,
  type SalesInvoicePaymentDetailsSourceResponse,
} from "./sales-invoice-payment-details-source-response.js";

export type SalesInvoicePaymentDetailsResponse = {
  /** The way through which the invoice is to be set to paid. */
  source: SalesInvoicePaymentDetailsSourceResponse;
  /**
   * A reference to the payment the sales invoice is paid by. Required for `source` values
   * `payment-link` and `payment`.
   */
  sourceReference?: string | null;
};

export const salesInvoicePaymentDetailsResponseSchema: Schema<SalesInvoicePaymentDetailsResponse> =
  s.object<SalesInvoicePaymentDetailsResponse>({
    source: salesInvoicePaymentDetailsSourceResponseSchema,
    sourceReference: s.optionalNullable(s.string()),
  });
