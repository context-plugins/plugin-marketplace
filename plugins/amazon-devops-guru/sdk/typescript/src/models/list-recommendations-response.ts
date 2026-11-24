import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recommendationSchema, type Recommendation } from "./recommendation.js";

export type ListRecommendationsResponse = {
  /** An array of the requested recommendations. */
  recommendations?: Recommendation[];
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there
   * are no more pages, this value is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listRecommendationsResponseSchema: Schema<ListRecommendationsResponse> =
  s.object<ListRecommendationsResponse>(
    {
      recommendations: s.optional(s.array(s.lazy(() => recommendationSchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        recommendations: "Recommendations",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
