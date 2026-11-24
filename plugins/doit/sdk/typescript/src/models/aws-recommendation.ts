import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Recommended commitment levels and savings estimates for one PerfectScale for Commitments
 * commitment type on an AWS organization.
 */
export type AwsRecommendation = {
  /**
   * Coverage target policy this recommendation was generated for (built-in or customer-defined).
   */
  policy?: string;
  /**
   * Active hourly commitment ($/h) currently applied to this AWS organization and commitment type,
   * including commitments already purchased.
   */
  currentCommitment?: number;
  /**
   * Recommended total hourly commitment ($/h) based on usage patterns and your commitment policy.
   * Designed to increase savings while managing underutilization risk.
   */
  recommendedCommitment?: number;
  /**
   * Estimated additional monthly savings ($/month) from applying the recommended commitment
   * relative to `currentCommitment`.
   */
  potentialAdditionalSavings?: number;
  /**
   * Estimated average coverage of eligible spend if the recommended commitment were in place, as a
   * fraction from 0 to 1 (for example, `0.5517` is 55.17%). Same scale as `esr` and the inventory
   * utilization and coverage fields.
   */
  estimatedAverageCoverage?: number;
  /**
   * Shelf-price hourly equivalent ($/h) of the recommended commitment, derived from the median
   * hourly eligible usage over the last 60 days multiplied by `estimatedAverageCoverage`. Use this
   * to compare the recommendation line to eligible usage on charts.
   */
  estimatedEquivalentRecommendedCommitment?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsRecommendationProperties: s.Shape<AwsRecommendation> = {
  policy: s.optional(s.string()),
  currentCommitment: s.optional(s.float64()),
  recommendedCommitment: s.optional(s.float64()),
  potentialAdditionalSavings: s.optional(s.float64()),
  estimatedAverageCoverage: s.optional(s.float64()),
  estimatedEquivalentRecommendedCommitment: s.optional(s.float64()),
};

export const awsRecommendationInternalSchema: Schema<AwsRecommendation> = s.object<AwsRecommendation>(
  awsRecommendationProperties,
  { additionalProperties: s.json() },
);

export const awsRecommendationSchema: Schema<AwsRecommendation> = s.lazySchema(() =>
  s.object<AwsRecommendation>(
    {
      ...awsRecommendationProperties,
      estimatedAverageCoverage: s.optional(s.float64().check(s.gte(0), s.lte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
