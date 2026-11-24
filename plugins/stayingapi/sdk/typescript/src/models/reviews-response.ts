import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";
import { reviewInternalSchema, reviewSchema, type Review } from "./review.js";

export type ReviewsResponse = {
  /** Endpoint-specific data payload. */
  data: Review[];
  /** Canonical response metadata present on every 200 (§6.3.3). */
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const reviewsResponseProperties: s.Shape<ReviewsResponse> = {
  data: s.array(s.lazy(() => reviewInternalSchema)),
  meta: metaInternalSchema,
};

export const reviewsResponseInternalSchema: Schema<ReviewsResponse> = s.object<ReviewsResponse>(
  reviewsResponseProperties,
  { additionalProperties: s.json() },
);

export const reviewsResponseSchema: Schema<ReviewsResponse> = s.lazySchema(() =>
  s.object<ReviewsResponse>(
    {
      ...reviewsResponseProperties,
      data: s.array(s.lazy(() => reviewSchema)),
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
