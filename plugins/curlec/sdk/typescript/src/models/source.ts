import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity1RazorpayXTransactionsApiSchema,
  type Entity1RazorpayXTransactionsApi,
} from "./entity1-razorpay-xtransactions-api.js";

/** Source entity — either a payout (debit) or bank_transfer (credit) */
export type Source = {
  /** pout_* for payouts, bt_* for bank transfers */
  id?: string;
  entity?: Entity1RazorpayXTransactionsApi;
  amount?: number;
  /** Payout only */
  fundAccountId?: string;
  /** Payout only */
  notes?: Record<string, unknown>;
  /** Payout only, populated at processing state */
  fees?: number;
  /** Payout only, populated at processing state */
  tax?: number;
  /** Payout only */
  status?: string;
  /** Payout only */
  utr?: string;
  /** Payout only */
  mode?: string;
  feeType?: string;
  /** bank_transfer only */
  payerName?: string;
  /** bank_transfer only */
  payerAccount?: string;
  /** bank_transfer only */
  payerIfsc?: string;
  /** bank_transfer only */
  bankReference?: string;
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceSchema: Schema<Source> = s.object<Source>(
  {
    id: s.optional(s.string()),
    entity: s.optional(s.lazy(() => entity1RazorpayXTransactionsApiSchema)),
    amount: s.optional(s.int()),
    fundAccountId: s.optional(s.string()),
    notes: s.optional(s.record(s.string(), s.unknown())),
    fees: s.optional(s.int()),
    tax: s.optional(s.int()),
    status: s.optional(s.string()),
    utr: s.optional(s.string()),
    mode: s.optional(s.string()),
    feeType: s.optional(s.string()),
    payerName: s.optional(s.string()),
    payerAccount: s.optional(s.string()),
    payerIfsc: s.optional(s.string()),
    bankReference: s.optional(s.string()),
    createdAt: s.optional(s.int()),
    _keysMap: {
      fundAccountId: "fund_account_id",
      feeType: "fee_type",
      payerName: "payer_name",
      payerAccount: "payer_account",
      payerIfsc: "payer_ifsc",
      bankReference: "bank_reference",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
