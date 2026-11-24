import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { businessSchema, type Business } from "./business.js";

export type AdAccount = {
  /** The ID of the ad account (prefixed with act_) */
  id?: string;
  /** The numeric account ID */
  accountId?: string;
  /** The name of the ad account */
  name?: string;
  /**
   * Status of the account. 1 = ACTIVE, 2 = DISABLED, 3 = UNSETTLED, 7 = PENDING_RISK_REVIEW, 8 =
   * PENDING_SETTLEMENT, 9 = IN_GRACE_PERIOD, 100 = PENDING_CLOSURE, 101 = CLOSED.
   */
  accountStatus?: number;
  /** Currency code used by the account (ISO 4217) */
  currency?: string;
  /** Timezone name for the ad account */
  timezoneName?: string;
  /** Total amount spent by the account in account currency */
  amountSpent?: string;
  /** Current remaining account balance */
  balance?: string;
  /** Spend cap for the account */
  spendCap?: string;
  /** The business associated with this ad account */
  business?: Business;
  createdTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adAccountSchema: Schema<AdAccount> = s.object<AdAccount>(
  {
    id: s.optional(s.string()),
    accountId: s.optional(s.string()),
    name: s.optional(s.string()),
    accountStatus: s.optional(s.int()),
    currency: s.optional(s.string()),
    timezoneName: s.optional(s.string()),
    amountSpent: s.optional(s.string()),
    balance: s.optional(s.string()),
    spendCap: s.optional(s.string()),
    business: s.optional(s.lazy(() => businessSchema)),
    createdTime: s.optional(s.dateTime()),
    _keysMap: {
      accountId: "account_id",
      accountStatus: "account_status",
      timezoneName: "timezone_name",
      amountSpent: "amount_spent",
      spendCap: "spend_cap",
      createdTime: "created_time",
    },
  },
  { additionalProperties: s.json() },
);
