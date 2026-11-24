import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reviewSchema, type Review } from "./review.js";

export type ApiV1MiscGoogleBusinessReviewsResponse = {
  reviews: Review[];
  total: number;
  limit: number;
  remainingCapacity: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscGoogleBusinessReviewsResponseSchema: Schema<ApiV1MiscGoogleBusinessReviewsResponse> =
  s.object<ApiV1MiscGoogleBusinessReviewsResponse>(
    {
      reviews: s.array(s.lazy(() => reviewSchema)),
      total: s.float64(),
      limit: s.float64(),
      remainingCapacity: s.float64(),
    },
    { additionalProperties: s.json() },
  );
