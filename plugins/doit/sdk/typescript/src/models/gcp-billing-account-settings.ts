import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commitmentTermSchema, type CommitmentTerm } from "./commitment-term.js";
import { purchaseModeSchema, type PurchaseMode } from "./purchase-mode.js";

/** Recommendation and automation engine settings for one product line on a GCP billing account. */
export type GcpBillingAccountSettings = {
  /**
   * Whether purchases execute automatically or require customer approval before the planner
   * proceeds. Configured in the DoiT Console Settings tab; this settings API is read-only.
   */
  purchaseMode: PurchaseMode;
  /** Minimum hourly commitment amount (USD) per purchase step. */
  minimumCommitment: number;
  /** Latest calendar day of the month on which a purchase may be scheduled. */
  lastDayOfMonthForPurchase: number;
  /** Maximum total hourly commitment (USD). `0` means no cap. */
  maximumCommitment: number;
  /** Preferred commitment term length for new purchases. */
  term: CommitmentTerm;
  /** Coverage target policy for recommendations and purchases (built-in or customer-defined). */
  policy: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gcpBillingAccountSettingsSchema: Schema<GcpBillingAccountSettings> =
  s.object<GcpBillingAccountSettings>(
    {
      purchaseMode: purchaseModeSchema,
      minimumCommitment: s.float64(),
      lastDayOfMonthForPurchase: s.int(),
      maximumCommitment: s.float64(),
      term: commitmentTermSchema,
      policy: s.string(),
    },
    { additionalProperties: s.json() },
  );
