import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsMonthlyPotentialSavingsInternalSchema,
  awsMonthlyPotentialSavingsSchema,
  type AwsMonthlyPotentialSavings,
} from "./aws-monthly-potential-savings.js";
import { awsOnboardingStatusSchema, type AwsOnboardingStatus } from "./aws-onboarding-status.js";
import {
  savingsTotals1InternalSchema,
  savingsTotals1Schema,
  type SavingsTotals1,
} from "./savings-totals1.js";
import { stats30D1InternalSchema, stats30D1Schema, type Stats30D1 } from "./stats30-d1.js";

export type AwsOrganization = {
  /** 12-digit account number of the AWS organization's management (payer) account. */
  managementAccountId: string;
  /**
   * Human-readable account name, if available. Defaults to the AWS Organizations account name; may
   * be overridden by a custom name set on the asset in the DoiT Console. Null when no name is
   * available.
   */
  displayName?: string | null;
  onboardingStatus?: AwsOnboardingStatus;
  /**
   * Timestamp of the last successful Savings Plan inventory sync. Null when a sync has not
   * completed yet.
   */
  savingsPlansSyncTime?: Date | null;
  /** Trailing 30-day aggregate metrics (`esr`, `savings`), broken down by SP type. */
  stats30D?: Stats30D1;
  /**
   * Year-to-date and lifetime savings per Savings Plan (SP) type. Same values as returned by `GET
   * /ps4commitments/v1/aws/organizations/{managementAccountId}` for this organization, so callers
   * can sum totals across AWS organizations without making an extra get-by-id call per
   * organization. Lifetime is bounded by each AWS organization's PerfectScale for Commitments
   * onboarding start date.
   */
  savingsTotals?: SavingsTotals1;
  /**
   * Estimated monthly additional savings per SP type for this AWS organization from the latest
   * purchase projection.
   */
  monthlyPotentialSavings?: AwsMonthlyPotentialSavings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsOrganizationProperties: s.Shape<AwsOrganization> = {
  managementAccountId: s.string(),
  displayName: s.optionalNullable(s.string()),
  onboardingStatus: s.optional(s.lazy(() => awsOnboardingStatusSchema)),
  savingsPlansSyncTime: s.optionalNullable(s.dateTime()),
  stats30D: s.optional(s.lazy(() => stats30D1InternalSchema)),
  savingsTotals: s.optional(s.lazy(() => savingsTotals1InternalSchema)),
  monthlyPotentialSavings: s.optional(s.lazy(() => awsMonthlyPotentialSavingsInternalSchema)),
  _keysMap: {
    stats30D: "stats30d",
  },
};

export const awsOrganizationInternalSchema: Schema<AwsOrganization> = s.object<AwsOrganization>(
  awsOrganizationProperties,
  { additionalProperties: s.json() },
);

export const awsOrganizationSchema: Schema<AwsOrganization> = s.lazySchema(() =>
  s.object<AwsOrganization>(
    {
      ...awsOrganizationProperties,
      stats30D: s.optional(s.lazy(() => stats30D1Schema)),
      savingsTotals: s.optional(s.lazy(() => savingsTotals1Schema)),
      monthlyPotentialSavings: s.optional(s.lazy(() => awsMonthlyPotentialSavingsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
