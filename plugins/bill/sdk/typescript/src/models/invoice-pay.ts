import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Invoice Payment response. */
export type InvoicePay = {
  /** BILL-generated ID of the invoice to be paid. The value begins with `00e`. */
  invoiceId?: string;
  /**
   * Payment amount. For a payment in an international currency (not USD), this value is in the
   * local currency.
   */
  amount?: number;
  /** Invoice payment date. The value is in the `yyyy-MM-dd` format. */
  paymentDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invoicePaySchema: Schema<InvoicePay> = s.object<InvoicePay>(
  {
    invoiceId: s.optional(s.string()),
    amount: s.optional(s.float64()),
    paymentDate: s.optional(s.dateOnly()),
  },
  { additionalProperties: s.json() },
);
