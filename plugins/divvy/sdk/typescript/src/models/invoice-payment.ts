import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { invoicePaymentStatusSchema, type InvoicePaymentStatus } from "./invoice-payment-status.js";

/** Invoice payments information. */
export type InvoicePayment = {
  /**
   * BILL-generated ID of the invoice payment. The value begins with `0ip`.
   *
   * This ID is generated when a payment is applied to the listed invoice.
   */
  id?: string;
  /** Invoice amount paid */
  amount?: number;
  status?: InvoicePaymentStatus;
  /** Invoice payment date. The value is in the `yyyy-MM-dd` format. */
  date?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoicePaymentSchema: Schema<InvoicePayment> = s.object<InvoicePayment>(
  {
    id: s.optional(s.string()),
    amount: s.optional(s.float64()),
    status: s.optional(s.lazy(() => invoicePaymentStatusSchema)),
    date: s.optional(s.dateOnly()),
  },
  { additionalProperties: s.json() },
);
