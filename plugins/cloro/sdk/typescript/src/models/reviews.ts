import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { productReviewSchema, type ProductReview } from "./product-review.js";

export type Reviews = {
  summary?: string;
  reviews?: ProductReview[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reviewsSchema: Schema<Reviews> = s.object<Reviews>(
  {
    summary: s.optional(s.string()),
    reviews: s.optional(s.array(s.lazy(() => productReviewSchema))),
  },
  { additionalProperties: s.json() },
);
