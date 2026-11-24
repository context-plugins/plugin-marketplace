import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { moneyInternalSchema, moneySchema, type Money } from "./money.js";

/**
 * One calendar-month aggregate for the billing account. Money fields are wrapped objects (`{amount,
 * currency}`).
 */
export type GcpMonthlyStatsEntry = {
  /** Calendar month in `YYYY-MM` form (UTC). */
  month: string;
  /**
   * Effective Savings Rate (ESR) for the month, as a fraction from 0 to 1. Measures what share of
   * eligible spend is saved through active commitments compared with equivalent on-demand cost.
   */
  esr: number;
  /**
   * Eligible on-demand cost for the month. On-demand cost is eligible cloud spend priced at full
   * on-demand rates, that is, not discounted by a commitment.
   */
  onDemandCost: Money;
  /** Actual cost after commitments for the month. */
  costWithSavings: Money;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gcpMonthlyStatsEntryProperties: s.Shape<GcpMonthlyStatsEntry> = {
  month: s.string(),
  esr: s.float64(),
  onDemandCost: moneyInternalSchema,
  costWithSavings: moneyInternalSchema,
};

export const gcpMonthlyStatsEntryInternalSchema: Schema<GcpMonthlyStatsEntry> =
  s.object<GcpMonthlyStatsEntry>(gcpMonthlyStatsEntryProperties, { additionalProperties: s.json() });

export const gcpMonthlyStatsEntrySchema: Schema<GcpMonthlyStatsEntry> = s.lazySchema(() =>
  s.object<GcpMonthlyStatsEntry>(
    {
      ...gcpMonthlyStatsEntryProperties,
      month: s.string().check(s.pattern("^\\d{4}-(0[1-9]|1[0-2])$")),
      onDemandCost: moneySchema,
      costWithSavings: moneySchema,
    },
    { additionalProperties: s.json() },
  ),
);
