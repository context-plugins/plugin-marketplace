import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageBlockReasonSchema, type UsageBlockReason } from "./usage-block-reason.js";

export type CreditStateResponse = {
  /**
   * Balance net of in-flight holds (`available_cached - held`). The ledger unit, kept for support
   * and reconciliation; display `available_amount` instead. Not a permission to start a run: use
   * `usage_allowed` for that.
   */
  availableUnits: number;
  /**
   * `available_units` in money, in microdollars (millionths of one `currency` unit), so 8372600 is
   * $8.3726. The scale is exact for every amount this API reports; cents and hundredths of a cent
   * both truncate a single chat message to zero. Converted by the server because the client cannot:
   * the ratio is the account's pinned price and only the backend holds it.
   */
  availableAmount: number;
  /** Balance after settled credits and debits, before in-flight holds (`available_cached`). */
  settledUnits: number;
  /**
   * `settled_units` in money, in microdollars (millionths of one `currency` unit), using the
   * account's pinned price.
   */
  settledAmount: number;
  /**
   * ISO currency code every amount in this response is in. Fixed for the life of the account: the
   * first top-up pins the price, and the price fixes the currency. A user who has not topped up yet
   * reads the currency they will be charged in: their Pro subscription's, or USD when they have
   * none.
   */
  currency: string;
  /** Whether a new run may start right now. */
  usageAllowed: boolean;
  /** Balance is at or below the low-balance threshold. */
  lowBalance: boolean;
  /**
   * Whether the settled balance before in-flight holds is at or below the low-balance threshold.
   */
  isSettledLowBalance: boolean;
  /**
   * Why a new run cannot start, or `null` when it can. `temporarily_unavailable` means existing
   * holds are the only blocker; `insufficient_credit` means the settled balance is at or below the
   * configured floor; `plan_required` means the user has no Pro, and the credit waits until they
   * do; `billing_paused` means the compute subscription was cancelled, and the credit waits for the
   * next top-up.
   */
  usageBlockReason: UsageBlockReason | null;
  /**
   * No credit is left for another run after in-flight holds. Equivalent to `usage_allowed` being
   * false, except when `usage_block_reason` is `plan_required` or `billing_paused`: those block
   * runs while credit is still there.
   */
  depleted: boolean;
  /**
   * The smallest top-up `top_up` accepts, in `currency`'s minor unit (500 is $5.00; yen have no
   * minor unit, so 700 is 700 yen).
   */
  minTopUpAmount: number;
  /**
   * Top-up amounts to offer, in `currency`'s minor unit, smallest first. Each is at least
   * `min_top_up_amount`.
   */
  topUpPresets: number[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditStateResponseSchema: Schema<CreditStateResponse> = s.object<CreditStateResponse>(
  {
    availableUnits: s.int(),
    availableAmount: s.int(),
    settledUnits: s.int(),
    settledAmount: s.int(),
    currency: s.string(),
    usageAllowed: s.boolean(),
    lowBalance: s.boolean(),
    isSettledLowBalance: s.boolean(),
    usageBlockReason: s.nullable(s.lazy(() => usageBlockReasonSchema)),
    depleted: s.boolean(),
    minTopUpAmount: s.int(),
    topUpPresets: s.array(s.int()),
    _keysMap: {
      availableUnits: "available_units",
      availableAmount: "available_amount",
      settledUnits: "settled_units",
      settledAmount: "settled_amount",
      usageAllowed: "usage_allowed",
      lowBalance: "low_balance",
      isSettledLowBalance: "is_settled_low_balance",
      usageBlockReason: "usage_block_reason",
      minTopUpAmount: "min_top_up_amount",
      topUpPresets: "top_up_presets",
    },
  },
  { additionalProperties: s.json() },
);
