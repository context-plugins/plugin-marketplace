import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response data for initiate payout request */
export type PayoutDetails2 = {
  status?: string;
  mode?: string;
  amount?: number;
  currency?: string;
  eta?: string;
  message?: string;
  transactionId?: string;
  createdAt?: string;
  bankName?: string;
  transactionFee?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const payoutDetails2Schema: Schema<PayoutDetails2> = s.object<PayoutDetails2>(
  {
    status: s.optional(s.string()),
    mode: s.optional(s.string()),
    amount: s.optional(s.float64()),
    currency: s.optional(s.string()),
    eta: s.optional(s.string()),
    message: s.optional(s.string()),
    transactionId: s.optional(s.string()),
    createdAt: s.optional(s.string()),
    bankName: s.optional(s.string()),
    transactionFee: s.optional(s.string()),
    _keysMap: {
      transactionId: "transaction_id",
      createdAt: "created_at",
      bankName: "bank_name",
      transactionFee: "transaction_fee",
    },
  },
  { additionalProperties: s.json() },
);
