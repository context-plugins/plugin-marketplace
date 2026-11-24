import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eligibleSpendDataPointSchema, type EligibleSpendDataPoint } from "./eligible-spend-data-point.js";
import {
  gcpRecommendationInternalSchema,
  gcpRecommendationSchema,
  type GcpRecommendation,
} from "./gcp-recommendation.js";

/** A single GCP recommendation paired with its eligible-spend usage series. */
export type GcpRecommendationWithEligibleSpend = {
  /**
   * Shelf-price hourly equivalent ($/h) of the recommended commitment, derived from the median
   * hourly eligible usage over the trailing window multiplied by `estimatedAverageCoverage`. Use
   * this to compare the recommendation line to eligible usage on charts.
   */
  estimatedEquivalentRecommendedCommitment?: number;
  /** Recommended commitment metrics for the requested (service, region) scope. */
  recommendation?: GcpRecommendation;
  /**
   * Eligible spend over time at the requested `granularity`. Empty when no eligible usage exists in
   * the trailing window.
   */
  eligibleUsage?: EligibleSpendDataPoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gcpRecommendationWithEligibleSpendProperties: s.Shape<GcpRecommendationWithEligibleSpend> = {
  estimatedEquivalentRecommendedCommitment: s.optional(s.float64()),
  recommendation: s.optional(s.lazy(() => gcpRecommendationInternalSchema)),
  eligibleUsage: s.optional(s.array(s.lazy(() => eligibleSpendDataPointSchema))),
};

export const gcpRecommendationWithEligibleSpendInternalSchema: Schema<GcpRecommendationWithEligibleSpend> =
  s.object<GcpRecommendationWithEligibleSpend>(gcpRecommendationWithEligibleSpendProperties, {
    additionalProperties: s.json(),
  });

export const gcpRecommendationWithEligibleSpendSchema: Schema<GcpRecommendationWithEligibleSpend> =
  s.lazySchema(() =>
    s.object<GcpRecommendationWithEligibleSpend>(
      {
        ...gcpRecommendationWithEligibleSpendProperties,
        recommendation: s.optional(s.lazy(() => gcpRecommendationSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
