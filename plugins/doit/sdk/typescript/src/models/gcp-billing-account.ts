import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  gcpOnboardingStatusByServiceSchema,
  type GcpOnboardingStatusByService,
} from "./gcp-onboarding-status-by-service.js";
import {
  gcpSavingsTotalsByServiceInternalSchema,
  gcpSavingsTotalsByServiceSchema,
  type GcpSavingsTotalsByService,
} from "./gcp-savings-totals-by-service.js";
import {
  gcpStats30DByServiceInternalSchema,
  gcpStats30DByServiceSchema,
  type GcpStats30DByService,
} from "./gcp-stats30-dby-service.js";

export type GcpBillingAccount = {
  /** GCP Billing Account ID. */
  billingAccountId: string;
  /**
   * Human-readable account name, if available. Defaults to the GCP Billing Account display name;
   * may be overridden by a custom name set on the asset in the DoiT Console. Null when no name is
   * available.
   */
  displayName?: string | null;
  /** ISO 4217 currency code for this billing account. */
  currency?: string | null;
  /**
   * PerfectScale for Commitments onboarding status per product line (`compute`, `cloud_sql`),
   * ordered `compute` first. A product line is omitted when it is not onboarded; the field is
   * absent when no product line is onboarded.
   */
  onboardingStatus?: GcpOnboardingStatusByService[];
  /** `true` if the BigQuery CUD export is healthy and up to date. */
  cudExportHealthy?: boolean | null;
  /**
   * Timestamp of the last successful CUD inventory sync. Null when a sync has not completed yet.
   */
  commitmentsSyncTime?: Date | null;
  /**
   * Trailing 30-day aggregate metrics (`esr`, `savings`) per product line (`compute`, `cloud_sql`),
   * ordered `compute` first. Absent when no product line has stats.
   */
  stats30D?: GcpStats30DByService[];
  /**
   * Year-to-date and lifetime savings per product line (`compute`, `cloud_sql`), ordered `compute`
   * first; absent when no product line has totals. Same values as returned by `GET
   * /ps4commitments/v1/gcp/billing-accounts/{billingAccountId}` for this billing account, so
   * callers can sum totals across billing accounts without making an extra get-by-id call per
   * billing account. Lifetime is bounded by each billing account's PerfectScale for Commitments
   * onboarding start date.
   */
  savingsTotals?: GcpSavingsTotalsByService[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gcpBillingAccountProperties: s.Shape<GcpBillingAccount> = {
  billingAccountId: s.string(),
  displayName: s.optionalNullable(s.string()),
  currency: s.optionalNullable(s.string()),
  onboardingStatus: s.optional(s.array(s.lazy(() => gcpOnboardingStatusByServiceSchema))),
  cudExportHealthy: s.optionalNullable(s.boolean()),
  commitmentsSyncTime: s.optionalNullable(s.dateTime()),
  stats30D: s.optional(s.array(s.lazy(() => gcpStats30DByServiceInternalSchema))),
  savingsTotals: s.optional(s.array(s.lazy(() => gcpSavingsTotalsByServiceInternalSchema))),
  _keysMap: {
    stats30D: "stats30d",
  },
};

export const gcpBillingAccountInternalSchema: Schema<GcpBillingAccount> = s.object<GcpBillingAccount>(
  gcpBillingAccountProperties,
  { additionalProperties: s.json() },
);

export const gcpBillingAccountSchema: Schema<GcpBillingAccount> = s.lazySchema(() =>
  s.object<GcpBillingAccount>(
    {
      ...gcpBillingAccountProperties,
      stats30D: s.optional(s.array(s.lazy(() => gcpStats30DByServiceSchema))),
      savingsTotals: s.optional(s.array(s.lazy(() => gcpSavingsTotalsByServiceSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
