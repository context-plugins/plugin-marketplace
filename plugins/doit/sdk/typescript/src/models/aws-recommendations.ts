import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsRecommendationInternalSchema,
  awsRecommendationSchema,
  type AwsRecommendation,
} from "./aws-recommendation.js";

export type AwsRecommendations = {
  /** Recommendation for the Compute commitment type. */
  compute?: AwsRecommendation;
  /** Recommendation for the Database commitment type. */
  database?: AwsRecommendation;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsRecommendationsProperties: s.Shape<AwsRecommendations> = {
  compute: s.optional(s.lazy(() => awsRecommendationInternalSchema)),
  database: s.optional(s.lazy(() => awsRecommendationInternalSchema)),
};

export const awsRecommendationsInternalSchema: Schema<AwsRecommendations> = s.object<AwsRecommendations>(
  awsRecommendationsProperties,
  { additionalProperties: s.json() },
);

export const awsRecommendationsSchema: Schema<AwsRecommendations> = s.lazySchema(() =>
  s.object<AwsRecommendations>(
    {
      ...awsRecommendationsProperties,
      compute: s.optional(s.lazy(() => awsRecommendationSchema)),
      database: s.optional(s.lazy(() => awsRecommendationSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
