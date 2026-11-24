import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { moneyInternalSchema, moneySchema, type Money } from "./money.js";

/**
 * Running savings figures derived server-side from the full monthly stats history, as the sum of
 * `onDemandCost - costWithSavings` per month. `lifetime` starts at PerfectScale for Commitments
 * onboarding; `ytd` starts at the later of January 1 of the current year and onboarding. Months
 * before the bound are excluded; the bound month and the current month are prorated.
 */
export type AwsSavingsTotals = {
  /** Year-to-date realized savings. */
  ytd: Money;
  /** Lifetime realized savings since onboarding. */
  lifetime: Money;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsSavingsTotalsProperties: s.Shape<AwsSavingsTotals> = {
  ytd: moneyInternalSchema,
  lifetime: moneyInternalSchema,
};

export const awsSavingsTotalsInternalSchema: Schema<AwsSavingsTotals> = s.object<AwsSavingsTotals>(
  awsSavingsTotalsProperties,
  { additionalProperties: s.json() },
);

export const awsSavingsTotalsSchema: Schema<AwsSavingsTotals> = s.lazySchema(() =>
  s.object<AwsSavingsTotals>(
    {
      ...awsSavingsTotalsProperties,
      ytd: moneySchema,
      lifetime: moneySchema,
    },
    { additionalProperties: s.json() },
  ),
);
