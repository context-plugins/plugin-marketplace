import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecommendationsFetchRequest = {
  /** Maximum number of recommendations to return. */
  limit?: number;
  /** Pagination token from a previous response. */
  pageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const recommendationsFetchRequestProperties: s.Shape<RecommendationsFetchRequest> = {
  limit: s.optional(s.int()),
  pageToken: s.optional(s.string()),
};

export const recommendationsFetchRequestInternalSchema: Schema<RecommendationsFetchRequest> =
  s.object<RecommendationsFetchRequest>(recommendationsFetchRequestProperties, {
    additionalProperties: s.json(),
  });

export const recommendationsFetchRequestSchema: Schema<RecommendationsFetchRequest> = s.lazySchema(() =>
  s.object<RecommendationsFetchRequest>(
    {
      ...recommendationsFetchRequestProperties,
      limit: s.optional(s.int().check(s.gte(1), s.lte(200))),
    },
    { additionalProperties: s.json() },
  ),
);
