import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { currencySchema, type Currency } from "./currency.js";
import {
  entityRazorpayXTransactionsApiSchema,
  type EntityRazorpayXTransactionsApi,
} from "./entity-razorpay-xtransactions-api.js";
import { sourceSchema, type Source } from "./source.js";

/** RazorpayX transaction record — inflow (bank_transfer credit) or outflow (payout debit). */
export type XTransaction = {
  /** Transaction ID (txn_*) */
  id?: string;
  entity?: EntityRazorpayXTransactionsApi;
  /** RazorpayX account number */
  accountNumber?: string;
  /** Amount in paise (does not include fees/tax) */
  amount?: number;
  currency?: Currency;
  /** Amount credited in paise; 0 for debits */
  credit?: number;
  /** Amount debited in paise; 0 for credits */
  debit?: number;
  /** Remaining account balance in paise after this transaction */
  balance?: number;
  /** Source entity — either a payout (debit) or bank_transfer (credit) */
  source?: Source;
  /** Unix timestamp */
  createdAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const xTransactionSchema: Schema<XTransaction> = s.object<XTransaction>(
  {
    id: s.optional(s.string()),
    entity: s.optional(s.lazy(() => entityRazorpayXTransactionsApiSchema)),
    accountNumber: s.optional(s.string()),
    amount: s.optional(s.int()),
    currency: s.optional(s.lazy(() => currencySchema)),
    credit: s.optional(s.int()),
    debit: s.optional(s.int()),
    balance: s.optional(s.int()),
    source: s.optional(s.lazy(() => sourceSchema)),
    createdAt: s.optional(s.int()),
    _keysMap: {
      accountNumber: "account_number",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
