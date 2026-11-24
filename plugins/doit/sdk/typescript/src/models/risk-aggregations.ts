import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Aggregate counts of risk statuses across the full filtered result set (all pages), not just the
 * current page.
 */
export type RiskAggregations = {
  total: number;
  atRisk: number;
  onTrack: number;
  unknown: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const riskAggregationsSchema: Schema<RiskAggregations> = s.object<RiskAggregations>(
  {
    total: s.int(),
    atRisk: s.int(),
    onTrack: s.int(),
    unknown: s.int(),
  },
  { additionalProperties: s.json() },
);
