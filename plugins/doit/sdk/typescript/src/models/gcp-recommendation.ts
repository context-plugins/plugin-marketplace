import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { service3Schema, type Service3 } from "./service3.js";

/** A CUD purchase recommendation for a (service, region) scope. */
export type GcpRecommendation = {
  /**
   * Coverage target policy configured for this product line and region scope (built-in or
   * customer-defined).
   */
  policy?: string;
  /**
   * Region scope for this recommendation, in `lower_snake_case` wire form (for example `us_east1`).
   * `global` for `compute`; a concrete region for `cloud_sql`.
   */
  region?: string;
  /** PS4C product line (`gcp_service`) this recommendation belongs to. */
  service?: Service3;
  /**
   * Active hourly commitment ($/h) currently applied to this billing account and product line,
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gcpRecommendationProperties: s.Shape<GcpRecommendation> = {
  policy: s.optional(s.string()),
  region: s.optional(s.string()),
  service: s.optional(s.lazy(() => service3Schema)),
  currentCommitment: s.optional(s.float64()),
  recommendedCommitment: s.optional(s.float64()),
  potentialAdditionalSavings: s.optional(s.float64()),
  estimatedAverageCoverage: s.optional(s.float64()),
};

export const gcpRecommendationInternalSchema: Schema<GcpRecommendation> = s.object<GcpRecommendation>(
  gcpRecommendationProperties,
  { additionalProperties: s.json() },
);

export const gcpRecommendationSchema: Schema<GcpRecommendation> = s.lazySchema(() =>
  s.object<GcpRecommendation>(
    {
      ...gcpRecommendationProperties,
      region: s.optional(s.string().check(s.pattern("^(global|[a-z]+(_[a-z0-9]+)+)$"))),
      estimatedAverageCoverage: s.optional(s.float64().check(s.gte(0), s.lte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
