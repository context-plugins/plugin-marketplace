import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { currencySchema, type Currency } from "./currency.js";
import {
  entityRazorpayXPayoutsApiSchema,
  type EntityRazorpayXPayoutsApi,
} from "./entity-razorpay-xpayouts-api.js";
import {
  fundAccountRazorpayXPayoutsApiInternalSchema,
  fundAccountRazorpayXPayoutsApiSchema,
  type FundAccountRazorpayXPayoutsApi,
} from "./fund-account-razorpay-xpayouts-api.js";
import { modeRazorpayXPayoutsApiSchema, type ModeRazorpayXPayoutsApi } from "./mode-razorpay-xpayouts-api.js";
import { purposeSchema, type Purpose } from "./purpose.js";
import { statusDetailsSchema, type StatusDetails } from "./status-details.js";
import {
  statusRazorpayXPayoutsApiSchema,
  type StatusRazorpayXPayoutsApi,
} from "./status-razorpay-xpayouts-api.js";

/**
 * RazorpayX payout disbursement. Idempotency header X-Payout-Idempotency required since March 15,
 * 2025.
 */
export type Payout = {
  /** Payout ID (pout_*) */
  id?: string;
  entity?: EntityRazorpayXPayoutsApi;
  fundAccountId?: string;
  /** Payout destination linked to a Contact. Immutable after creation. */
  fundAccount?: FundAccountRazorpayXPayoutsApi;
  /** Amount in paise (min 100) */
  amount?: number;
  currency?: Currency;
  fees?: number;
  tax?: number;
  /**
   * Transfer mode — case-sensitive. amazonpay limited to ₹10,000 per transaction; no custom
   * narration allowed.
   */
  mode?: ModeRazorpayXPayoutsApi;
  /** Unique Transaction Reference from bank */
  utr?: string;
  referenceId?: string;
  debitAccountNumber?: string;
  narration?: string;
  purpose?: Purpose;
  feeType?: string;
  status?: StatusRazorpayXPayoutsApi;
  statusDetails?: StatusDetails;
  batchId?: string;
  notes?: Record<string, unknown>;
  createdAt?: number;
  /** true: queue payout when account balance is insufficient. false (default): fail immediately. */
  queueIfLowBalance?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payoutProperties: s.Shape<Payout> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entityRazorpayXPayoutsApiSchema)),
  fundAccountId: s.optional(s.string()),
  fundAccount: s.optional(s.lazy(() => fundAccountRazorpayXPayoutsApiInternalSchema)),
  amount: s.optional(s.int()),
  currency: s.optional(s.lazy(() => currencySchema)),
  fees: s.optional(s.int()),
  tax: s.optional(s.int()),
  mode: s.optional(s.lazy(() => modeRazorpayXPayoutsApiSchema)),
  utr: s.optional(s.string()),
  referenceId: s.optional(s.string()),
  debitAccountNumber: s.optional(s.string()),
  narration: s.optional(s.string()),
  purpose: s.optional(s.lazy(() => purposeSchema)),
  feeType: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusRazorpayXPayoutsApiSchema)),
  statusDetails: s.optional(s.lazy(() => statusDetailsSchema)),
  batchId: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.unknown())),
  createdAt: s.optional(s.int()),
  queueIfLowBalance: s.optional(s.boolean()),
  _keysMap: {
    fundAccountId: "fund_account_id",
    fundAccount: "fund_account",
    referenceId: "reference_id",
    debitAccountNumber: "debit_account_number",
    feeType: "fee_type",
    statusDetails: "status_details",
    batchId: "batch_id",
    createdAt: "created_at",
    queueIfLowBalance: "queue_if_low_balance",
  },
};

export const payoutInternalSchema: Schema<Payout> = s.object<Payout>(payoutProperties, {
  additionalProperties: s.json(),
});

export const payoutSchema: Schema<Payout> = s.lazySchema(() =>
  s.object<Payout>(
    {
      ...payoutProperties,
      fundAccount: s.optional(s.lazy(() => fundAccountRazorpayXPayoutsApiSchema)),
      amount: s.optional(s.int().check(s.gte(100))),
      referenceId: s.optional(s.string().check(s.maxLength(40))),
      narration: s.optional(s.string().check(s.maxLength(30))),
    },
    { additionalProperties: s.json() },
  ),
);
