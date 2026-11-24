import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entityRazorpayInstantSettlementsApiSchema,
  type EntityRazorpayInstantSettlementsApi,
} from "./entity-razorpay-instant-settlements-api.js";
import { ondemandPayoutsSchema, type OndemandPayouts } from "./ondemand-payouts.js";
import {
  statusRazorpayInstantSettlementsApiSchema,
  type StatusRazorpayInstantSettlementsApi,
} from "./status-razorpay-instant-settlements-api.js";

export type InstantSettlement = {
  /** Unique instant settlement identifier. Prefix: setlod_ */
  id?: string;
  entity?: EntityRazorpayInstantSettlementsApi;
  /** Settlement amount requested (paise). */
  amountRequested?: number;
  /** Total amount transferred minus fees and tax (paise). */
  amountSettled?: number;
  /** Portion of requested amount yet to be settled (paise). */
  amountPending?: number;
  /** Amount returned to PG balance (paise). */
  amountReversed?: number;
  /** Combined fees and tax deducted (paise). */
  fees?: number;
  /** Tax on fee component (paise). */
  tax?: number;
  currency?: string;
  /** If true, settles maximum available balance. */
  settleFullBalance?: boolean;
  status?: StatusRazorpayInstantSettlementsApi;
  /** Custom reference note. Max 30 alphanumeric characters. */
  description?: string;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  createdAt?: number;
  /** Collection of individual payout records for this instant settlement. */
  ondemandPayouts?: OndemandPayouts;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const instantSettlementProperties: s.Shape<InstantSettlement> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entityRazorpayInstantSettlementsApiSchema)),
  amountRequested: s.optional(s.int()),
  amountSettled: s.optional(s.int()),
  amountPending: s.optional(s.int()),
  amountReversed: s.optional(s.int()),
  fees: s.optional(s.int()),
  tax: s.optional(s.int()),
  currency: s.optional(s.string()),
  settleFullBalance: s.optional(s.boolean()),
  status: s.optional(s.lazy(() => statusRazorpayInstantSettlementsApiSchema)),
  description: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.string())),
  createdAt: s.optional(s.int()),
  ondemandPayouts: s.optional(s.lazy(() => ondemandPayoutsSchema)),
  _keysMap: {
    amountRequested: "amount_requested",
    amountSettled: "amount_settled",
    amountPending: "amount_pending",
    amountReversed: "amount_reversed",
    settleFullBalance: "settle_full_balance",
    createdAt: "created_at",
    ondemandPayouts: "ondemand_payouts",
  },
};

export const instantSettlementInternalSchema: Schema<InstantSettlement> = s.object<InstantSettlement>(
  instantSettlementProperties,
  { additionalProperties: s.json() },
);

export const instantSettlementSchema: Schema<InstantSettlement> = s.lazySchema(() =>
  s.object<InstantSettlement>(
    {
      ...instantSettlementProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
