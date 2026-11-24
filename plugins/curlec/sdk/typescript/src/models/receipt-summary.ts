import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ReceiptSummary = {
  totalQuantity?: number;
  subTotalAmount?: number;
  currency?: string;
  netPayableAmount?: number;
  paymentStatus?: string;
  discounts?: Record<string, unknown>[];
  taxes?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const receiptSummarySchema: Schema<ReceiptSummary> = s.object<ReceiptSummary>(
  {
    totalQuantity: s.optional(s.float64()),
    subTotalAmount: s.optional(s.int()),
    currency: s.optional(s.string()),
    netPayableAmount: s.optional(s.int()),
    paymentStatus: s.optional(s.string()),
    discounts: s.optional(s.array(s.record(s.string(), s.unknown()))),
    taxes: s.optional(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      totalQuantity: "total_quantity",
      subTotalAmount: "sub_total_amount",
      netPayableAmount: "net_payable_amount",
      paymentStatus: "payment_status",
    },
  },
  { additionalProperties: s.json() },
);
