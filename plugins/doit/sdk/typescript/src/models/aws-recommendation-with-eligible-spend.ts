import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsRecommendationInternalSchema,
  awsRecommendationSchema,
  type AwsRecommendation,
} from "./aws-recommendation.js";
import { eligibleSpendDataPointSchema, type EligibleSpendDataPoint } from "./eligible-spend-data-point.js";

export type AwsRecommendationWithEligibleSpend = {
  /** Recommended commitment metrics for the requested commitment type. */
  recommendation?: AwsRecommendation;
  /**
   * Eligible spend over time at the requested `granularity`. Empty when no eligible usage exists in
   * the trailing window.
   */
  eligibleUsage?: EligibleSpendDataPoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsRecommendationWithEligibleSpendProperties: s.Shape<AwsRecommendationWithEligibleSpend> = {
  recommendation: s.optional(s.lazy(() => awsRecommendationInternalSchema)),
  eligibleUsage: s.optional(s.array(s.lazy(() => eligibleSpendDataPointSchema))),
};

export const awsRecommendationWithEligibleSpendInternalSchema: Schema<AwsRecommendationWithEligibleSpend> =
  s.object<AwsRecommendationWithEligibleSpend>(awsRecommendationWithEligibleSpendProperties, {
    additionalProperties: s.json(),
  });

export const awsRecommendationWithEligibleSpendSchema: Schema<AwsRecommendationWithEligibleSpend> =
  s.lazySchema(() =>
    s.object<AwsRecommendationWithEligibleSpend>(
      {
        ...awsRecommendationWithEligibleSpendProperties,
        recommendation: s.optional(s.lazy(() => awsRecommendationSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
