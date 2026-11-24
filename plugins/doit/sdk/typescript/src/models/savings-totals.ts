import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsSavingsTotalsInternalSchema,
  awsSavingsTotalsSchema,
  type AwsSavingsTotals,
} from "./aws-savings-totals.js";

/**
 * Year-to-date and lifetime savings, grouped by SP type. Lifetime is bounded by the parent AWS
 * organization's PerfectScale for Commitments onboarding start.
 */
export type SavingsTotals = {
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

const savingsTotalsProperties: s.Shape<SavingsTotals> = {
  compute: s.optional(s.lazy(() => awsSavingsTotalsInternalSchema)),
  database: s.optional(s.lazy(() => awsSavingsTotalsInternalSchema)),
};

export const savingsTotalsInternalSchema: Schema<SavingsTotals> = s.object<SavingsTotals>(
  savingsTotalsProperties,
  { additionalProperties: s.json() },
);

export const savingsTotalsSchema: Schema<SavingsTotals> = s.lazySchema(() =>
  s.object<SavingsTotals>(
    {
      ...savingsTotalsProperties,
      compute: s.optional(s.lazy(() => awsSavingsTotalsSchema)),
      database: s.optional(s.lazy(() => awsSavingsTotalsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
