import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageGroupResponseSchema, type UsageGroupResponse } from "./usage-group-response.js";

export type UsageSummaryResponse = {
  /**
   * ISO currency code every amount in this response is in. Fixed for the life of the account: the
   * first top-up pins the price, and the price fixes the currency. A user who has not topped up yet
   * reads the currency they will be charged in.
   */
  currency: string;
  /**
   * How many usage events settled in the window. One per unit of billable work: an automation run,
   * or a chat message. Narrow it with `category` to count one kind. A run that failed before it
   * reached the provider counts here and adds 0 to the amounts: it happened, and it cost nothing.
   */
  usageCount: number;
  /**
   * Units those events took off the balance, as a positive number. The ledger unit, kept for
   * support and reconciliation; display `charged_amount` instead. Covers settled usage only, so it
   * is smaller than the sum of `charged_units` over the same window in `/history`, which also
   * carries reversed grants.
   */
  chargedUnits: number;
  /**
   * `charged_units` in money, in microdollars (millionths of one `currency` unit), so 11287800 is
   * $11.2878. Divide by `usage_count` for the per-run figure; guard the zero case, because an
   * account with no usage reports 0 for both.
   */
  chargedAmount: number;
  /**
   * The same total split by `group_by`, largest spend first. Present only when `group_by` is set.
   * The counts and units add up to the totals above; each amount rounds on its own.
   */
  groups?: UsageGroupResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageSummaryResponseSchema: Schema<UsageSummaryResponse> = s.object<UsageSummaryResponse>(
  {
    currency: s.string(),
    usageCount: s.int(),
    chargedUnits: s.int(),
    chargedAmount: s.int(),
    groups: s.optional(s.array(s.lazy(() => usageGroupResponseSchema))),
    _keysMap: {
      usageCount: "usage_count",
      chargedUnits: "charged_units",
      chargedAmount: "charged_amount",
    },
  },
  { additionalProperties: s.json() },
);
