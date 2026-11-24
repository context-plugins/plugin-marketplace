import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsMonthlyPotentialSavingsInternalSchema,
  awsMonthlyPotentialSavingsSchema,
  type AwsMonthlyPotentialSavings,
} from "./aws-monthly-potential-savings.js";
import { dailyCoverageInternalSchema, dailyCoverageSchema, type DailyCoverage } from "./daily-coverage.js";
import { monthlyStatsInternalSchema, monthlyStatsSchema, type MonthlyStats } from "./monthly-stats.js";
import { savingsTotalsInternalSchema, savingsTotalsSchema, type SavingsTotals } from "./savings-totals.js";
import { stats30DInternalSchema, stats30DSchema, type Stats30D } from "./stats30-d.js";

/**
 * Single member AWS account detail. Adds the trailing-window stats that drive the
 * per-member-account view on the DoiT Console overview screen on top of the list-item shape:
 * - `monthlyStats`: last 6 calendar months per SP type.
 * - `dailyCoverage`: last 30 days per SP type.
 * - `savingsTotals`: year-to-date and lifetime savings per SP type, bounded by the parent AWS
 *   organization's PerfectScale for Commitments onboarding start.
 *
 * `monthlyPotentialSavings` (estimated monthly additional savings per SP type) is inherited from
 * the list-item shape (`AwsMemberAccount`).
 */
export type AwsMemberAccountDetail = {
  /** 12-digit AWS member account ID. */
  memberAccountId: string;
  /** 12-digit AWS management (payer) account ID of the parent AWS Organization. */
  managementAccountId: string;
  /**
   * Human-readable account name, if available. Defaults to the AWS Organizations account name; may
   * be overridden by a custom name set on the asset in the DoiT Console. Null when no name is
   * available.
   */
  displayName?: string | null;
  /** Trailing 30-day aggregate metrics per SP type (`compute`, `database`). */
  stats30D?: Stats30D;
  /**
   * Estimated monthly additional savings per SP type for this member account, attributed from the
   * parent AWS organization's projection by share of trailing-60-day Savings Plan-eligible
   * on-demand cost.
   */
  monthlyPotentialSavings?: AwsMonthlyPotentialSavings;
  /** Trailing 6 calendar months of stats, grouped by SP type. */
  monthlyStats?: MonthlyStats;
  /** Trailing 30 days of commitment coverage, grouped by SP type. */
  dailyCoverage?: DailyCoverage;
  /**
   * Year-to-date and lifetime savings, grouped by SP type. Lifetime is bounded by the parent AWS
   * organization's PerfectScale for Commitments onboarding start.
   */
  savingsTotals?: SavingsTotals;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsMemberAccountDetailProperties: s.Shape<AwsMemberAccountDetail> = {
  memberAccountId: s.string(),
  managementAccountId: s.string(),
  displayName: s.optionalNullable(s.string()),
  stats30D: s.optional(s.lazy(() => stats30DInternalSchema)),
  monthlyPotentialSavings: s.optional(s.lazy(() => awsMonthlyPotentialSavingsInternalSchema)),
  monthlyStats: s.optional(s.lazy(() => monthlyStatsInternalSchema)),
  dailyCoverage: s.optional(s.lazy(() => dailyCoverageInternalSchema)),
  savingsTotals: s.optional(s.lazy(() => savingsTotalsInternalSchema)),
  _keysMap: {
    stats30D: "stats30d",
  },
};

export const awsMemberAccountDetailInternalSchema: Schema<AwsMemberAccountDetail> =
  s.object<AwsMemberAccountDetail>(awsMemberAccountDetailProperties, { additionalProperties: s.json() });

export const awsMemberAccountDetailSchema: Schema<AwsMemberAccountDetail> = s.lazySchema(() =>
  s.object<AwsMemberAccountDetail>(
    {
      ...awsMemberAccountDetailProperties,
      stats30D: s.optional(s.lazy(() => stats30DSchema)),
      monthlyPotentialSavings: s.optional(s.lazy(() => awsMonthlyPotentialSavingsSchema)),
      monthlyStats: s.optional(s.lazy(() => monthlyStatsSchema)),
      dailyCoverage: s.optional(s.lazy(() => dailyCoverageSchema)),
      savingsTotals: s.optional(s.lazy(() => savingsTotalsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
