import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the invoice. */
export const SalesInvoiceStatusResponse = {
  Draft: "draft",
  Issuing: "issuing",
  Issued: "issued",
  PendingPayment: "pending-payment",
  Paid: "paid",
  Overdue: "overdue",
  PaymentReversed: "payment-reversed",
  Cancelled: "cancelled",
  Expired: "expired",
  Failed: "failed",
} as const;
export type SalesInvoiceStatusResponse =
  | (typeof SalesInvoiceStatusResponse)[keyof typeof SalesInvoiceStatusResponse]
  | (string & {});

export const salesInvoiceStatusResponseSchema: EnumSchema<SalesInvoiceStatusResponse> =
  s.enumOf<SalesInvoiceStatusResponse>(SalesInvoiceStatusResponse);
