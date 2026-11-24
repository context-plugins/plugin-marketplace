import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsSavingsTotalsInternalSchema,
  awsSavingsTotalsSchema,
  type AwsSavingsTotals,
} from "./aws-savings-totals.js";

/**
 * Year-to-date and lifetime savings per Savings Plan (SP) type. Same values as returned by `GET
 * /ps4commitments/v1/aws/organizations/{managementAccountId}` for this organization, so callers can
 * sum totals across AWS organizations without making an extra get-by-id call per organization.
 * Lifetime is bounded by each AWS organization's PerfectScale for Commitments onboarding start
 * date.
 */
export type SavingsTotals1 = {
  /**
   * Running savings figures derived server-side from the full monthly stats history, as the sum of
   * `onDemandCost - costWithSavings` per month. `lifetime` starts at PerfectScale for Commitments
   * onboarding; `ytd` starts at the later of January 1 of the current year and onboarding. Months
   * before the bound are excluded; the bound month and the current month are prorated.
   */
  compute?: AwsSavingsTotals;
  /**
   * Running savings figures derived server-side from the full monthly stats history, as the sum of
   * `onDemandCost - costWithSavings` per month. `lifetime` starts at PerfectScale for Commitments
   * onboarding; `ytd` starts at the later of January 1 of the current year and onboarding. Months
   * before the bound are excluded; the bound month and the current month are prorated.
   */
  database?: AwsSavingsTotals;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const savingsTotals1Properties: s.Shape<SavingsTotals1> = {
  compute: s.optional(s.lazy(() => awsSavingsTotalsInternalSchema)),
  database: s.optional(s.lazy(() => awsSavingsTotalsInternalSchema)),
};

export const savingsTotals1InternalSchema: Schema<SavingsTotals1> = s.object<SavingsTotals1>(
  savingsTotals1Properties,
  { additionalProperties: s.json() },
);

export const savingsTotals1Schema: Schema<SavingsTotals1> = s.lazySchema(() =>
  s.object<SavingsTotals1>(
    {
      ...savingsTotals1Properties,
      compute: s.optional(s.lazy(() => awsSavingsTotalsSchema)),
      database: s.optional(s.lazy(() => awsSavingsTotalsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
