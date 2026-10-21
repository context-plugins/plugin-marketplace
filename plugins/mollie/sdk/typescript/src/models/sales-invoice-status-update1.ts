import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status for the invoice to end up in.
 *
 * Dependent parameters: `paymentDetails` for `paid`, `emailDetails` for `issued` and `paid`.
 *
 * To cancel a `paid` invoice, first set the status to `payment-reversed`, then set it to
 * `cancelled`.
 */
export const SalesInvoiceStatusUpdate1 = {
  Draft: "draft",
  Issued: "issued",
  Paid: "paid",
  Cancelled: "cancelled",
  PaymentReversed: "payment-reversed",
} as const;
export type SalesInvoiceStatusUpdate1 =
  | (typeof SalesInvoiceStatusUpdate1)[keyof typeof SalesInvoiceStatusUpdate1]
  | (string & {});

export const salesInvoiceStatusUpdate1Schema: EnumSchema<SalesInvoiceStatusUpdate1> =
  s.enumOf<SalesInvoiceStatusUpdate1>(SalesInvoiceStatusUpdate1);
