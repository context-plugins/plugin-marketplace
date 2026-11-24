import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rationaleSchema, type Rationale } from "./rationale.js";
import { reviewsSchema, type Reviews } from "./reviews.js";

/** Rationale and reviews from the product sheet */
export type ProductDetails = {
  rationale?: Rationale;
  reviews?: Reviews;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productDetailsSchema: Schema<ProductDetails> = s.object<ProductDetails>(
  {
    rationale: s.optional(s.lazy(() => rationaleSchema)),
    reviews: s.optional(s.lazy(() => reviewsSchema)),
  },
  { additionalProperties: s.json() },
);
