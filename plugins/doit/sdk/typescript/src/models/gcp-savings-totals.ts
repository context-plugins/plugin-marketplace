import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { moneyInternalSchema, moneySchema, type Money } from "./money.js";

/**
 * Running savings figures derived server-side from the full monthly stats history, as the sum of
 * `onDemandCost - costWithSavings` per month. `lifetime` starts at PerfectScale for Commitments
 * onboarding; `ytd` starts at the later of January 1 of the current year and onboarding. Months
 * before the bound are excluded; the bound month and the current month are prorated.
 */
export type GcpSavingsTotals = {
  /** Year-to-date realized savings. */
  ytd: Money;
  /** Lifetime realized savings since onboarding. */
  lifetime: Money;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gcpSavingsTotalsProperties: s.Shape<GcpSavingsTotals> = {
  ytd: moneyInternalSchema,
  lifetime: moneyInternalSchema,
};

export const gcpSavingsTotalsInternalSchema: Schema<GcpSavingsTotals> = s.object<GcpSavingsTotals>(
  gcpSavingsTotalsProperties,
  { additionalProperties: s.json() },
);

export const gcpSavingsTotalsSchema: Schema<GcpSavingsTotals> = s.lazySchema(() =>
  s.object<GcpSavingsTotals>(
    {
      ...gcpSavingsTotalsProperties,
      ytd: moneySchema,
      lifetime: moneySchema,
    },
    { additionalProperties: s.json() },
  ),
);
