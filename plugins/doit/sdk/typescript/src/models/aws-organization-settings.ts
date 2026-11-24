import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commitmentTermSchema, type CommitmentTerm } from "./commitment-term.js";
import { paymentOptionSchema, type PaymentOption } from "./payment-option.js";
import { purchaseModeSchema, type PurchaseMode } from "./purchase-mode.js";

/**
 * Organization-specific recommendation and automation settings for one activated commitment type.
 */
export type AwsOrganizationSettings = {
  /**
   * Whether purchases execute automatically or require customer approval before the planner
   * proceeds. Configured in the DoiT Console Settings tab; this settings API is read-only.
   */
  purchaseMode: PurchaseMode;
  /** Minimum hourly commitment amount (USD) per purchase step. */
  minimumCommitment: number;
  /**
   * Latest calendar day of the month (1–28) on which new purchases may be scheduled. After this
   * day, the No Purchase Window applies until the next month. Default is 25; the maximum allowed
   * value is 28 to leave a buffer before month-end billing cycles.
   *
   * @default 25
   */
  lastDayOfMonthForPurchase?: number;
  /**
   * Maximum total hourly commitment (USD). `0` means no cap. Always present on settings responses.
   */
  maximumCommitment: number;
  /** Preferred commitment term length for new purchases. */
  term: CommitmentTerm;
  /** Preferred payment structure for new commitments. */
  paymentOption: PaymentOption;
  /** Coverage target policy for recommendations and purchases (built-in or customer-defined). */
  policy: string;
  /**
   * Fraction of total cost paid upfront (0–1) when `paymentOption` is `partial_upfront`. In the
   * DoiT Console this is set as 50–99% and applies to AWS Compute only; Database uses `no_upfront`
   * only.
   */
  upfrontPercentage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsOrganizationSettingsProperties: s.Shape<AwsOrganizationSettings> = {
  purchaseMode: purchaseModeSchema,
  minimumCommitment: s.float64(),
  lastDayOfMonthForPurchase: s.defaulted(s.int(), 25),
  maximumCommitment: s.float64(),
  term: commitmentTermSchema,
  paymentOption: paymentOptionSchema,
  policy: s.string(),
  upfrontPercentage: s.optional(s.float64()),
};

export const awsOrganizationSettingsInternalSchema: Schema<AwsOrganizationSettings> =
  s.object<AwsOrganizationSettings>(awsOrganizationSettingsProperties, { additionalProperties: s.json() });

export const awsOrganizationSettingsSchema: Schema<AwsOrganizationSettings> = s.lazySchema(() =>
  s.object<AwsOrganizationSettings>(
    {
      ...awsOrganizationSettingsProperties,
      lastDayOfMonthForPurchase: s.defaulted(s.int().check(s.gte(1), s.lte(28)), 25),
    },
    { additionalProperties: s.json() },
  ),
);
