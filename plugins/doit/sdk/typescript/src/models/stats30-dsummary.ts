import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { moneyInternalSchema, moneySchema, type Money } from "./money.js";

/**
 * Minimal 30-day aggregate. Only `esr` and `savings` are persisted at this granularity. Responses
 * are denominated in USD.
 */
export type Stats30DSummary = {
  /**
   * Effective Savings Rate (ESR) over the last 30 days, as a fraction from 0 to 1 (for example,
   * `0.187` is 18.7%). Measures what share of eligible spend is saved through active commitments
   * compared with equivalent on-demand cost. Higher ESR means greater realized savings. Null when
   * not yet available.
   */
  esr?: number | null;
  /** Total savings realized over the last 30 days from active commitments (USD). */
  savings?: Money;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const stats30DSummaryProperties: s.Shape<Stats30DSummary> = {
  esr: s.optionalNullable(s.float64()),
  savings: s.optional(s.lazy(() => moneyInternalSchema)),
};

export const stats30DSummaryInternalSchema: Schema<Stats30DSummary> = s.object<Stats30DSummary>(
  stats30DSummaryProperties,
  { additionalProperties: s.json() },
);

export const stats30DSummarySchema: Schema<Stats30DSummary> = s.lazySchema(() =>
  s.object<Stats30DSummary>(
    {
      ...stats30DSummaryProperties,
      savings: s.optional(s.lazy(() => moneySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
