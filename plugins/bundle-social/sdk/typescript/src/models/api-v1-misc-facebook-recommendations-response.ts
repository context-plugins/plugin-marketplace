import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recommendationSchema, type Recommendation } from "./recommendation.js";

export type ApiV1MiscFacebookRecommendationsResponse = {
  recommendations: Recommendation[];
  total: number;
  limit: number;
  remainingCapacity: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscFacebookRecommendationsResponseSchema: Schema<ApiV1MiscFacebookRecommendationsResponse> =
  s.object<ApiV1MiscFacebookRecommendationsResponse>(
    {
      recommendations: s.array(s.lazy(() => recommendationSchema)),
      total: s.float64(),
      limit: s.float64(),
      remainingCapacity: s.float64(),
    },
    { additionalProperties: s.json() },
  );
