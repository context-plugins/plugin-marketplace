import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mode1Schema, type Mode1 } from "./mode1.js";
import { purposeSchema, type Purpose } from "./purpose.js";

export type PayoutsRequest = {
  /** Razorpay X account number to debit */
  accountNumber: string;
  /** Required for standard payouts; omit for composite */
  fundAccountId?: string;
  /** Inline fund account for composite payout */
  fundAccount?: Record<string, unknown>;
  /** Amount in paise */
  amount: number;
  /** @default "INR" */
  currency?: "INR";
  /** Case-sensitive */
  mode: Mode1;
  purpose: Purpose;
  narration?: string;
  referenceId?: string;
  notes?: Record<string, unknown>;
  /** true: queue payout when account balance is insufficient (default: false) */
  queueIfLowBalance?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payoutsRequestProperties: s.Shape<PayoutsRequest> = {
  accountNumber: s.string(),
  fundAccountId: s.optional(s.string()),
  fundAccount: s.optional(s.record(s.string(), s.unknown())),
  amount: s.int(),
  currency: s.defaulted(s.literal("INR"), "INR"),
  mode: mode1Schema,
  purpose: purposeSchema,
  narration: s.optional(s.string()),
  referenceId: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.unknown())),
  queueIfLowBalance: s.optional(s.boolean()),
  _keysMap: {
    accountNumber: "account_number",
    fundAccountId: "fund_account_id",
    fundAccount: "fund_account",
    referenceId: "reference_id",
    queueIfLowBalance: "queue_if_low_balance",
  },
};

export const payoutsRequestInternalSchema: Schema<PayoutsRequest> = s.object<PayoutsRequest>(
  payoutsRequestProperties,
  { additionalProperties: s.json() },
);

export const payoutsRequestSchema: Schema<PayoutsRequest> = s.lazySchema(() =>
  s.object<PayoutsRequest>(
    {
      ...payoutsRequestProperties,
      amount: s.int().check(s.gte(100)),
      narration: s.optional(s.string().check(s.maxLength(30))),
      referenceId: s.optional(s.string().check(s.maxLength(40))),
    },
    { additionalProperties: s.json() },
  ),
);
