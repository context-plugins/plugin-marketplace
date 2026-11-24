import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reviewSchema, type Review } from "./review.js";

export type ApiV1ReviewsResponse1 = {
  reviews: Review[];
  /** Pass back as ?cursor= for the next page. Null means this is the end. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReviewsResponse1Schema: Schema<ApiV1ReviewsResponse1> = s.object<ApiV1ReviewsResponse1>(
  {
    reviews: s.array(s.lazy(() => reviewSchema)),
    nextCursor: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
