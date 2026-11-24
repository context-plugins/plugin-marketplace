import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaymentHistoryData = {
  amount?: number;
  mode?: string;
  status?: string;
  reason?: string;
  currency?: string;
  eta?: string;
  lastUpdatedAt?: string;
  bankName?: string;
  transactionId?: string;
  totalCharges?: number;
  chargesCategory?: string;
  createdAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentHistoryDataSchema: Schema<PaymentHistoryData> = s.object<PaymentHistoryData>(
  {
    amount: s.optional(s.float64()),
    mode: s.optional(s.string()),
    status: s.optional(s.string()),
    reason: s.optional(s.string()),
    currency: s.optional(s.string()),
    eta: s.optional(s.string()),
    lastUpdatedAt: s.optional(s.string()),
    bankName: s.optional(s.string()),
    transactionId: s.optional(s.string()),
    totalCharges: s.optional(s.float64()),
    chargesCategory: s.optional(s.string()),
    createdAt: s.optional(s.string()),
    _keysMap: {
      lastUpdatedAt: "last_updated_at",
      bankName: "bank_name",
      transactionId: "transaction_id",
      totalCharges: "total_charges",
      chargesCategory: "charges_category",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
