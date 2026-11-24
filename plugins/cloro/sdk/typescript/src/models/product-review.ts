import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { productCitationSchema, type ProductCitation } from "./product-citation.js";
import { sentimentSchema, type Sentiment } from "./sentiment.js";

/** One review source from the product sheet */
export type ProductReview = {
  source?: string;
  theme?: string;
  summary?: string;
  sentiment?: Sentiment;
  citation?: ProductCitation;
  /** Rating at the source. Not returned at the moment. */
  rating?: number;
  /** Number of reviews at the source. Not returned at the moment. */
  numReviews?: number;
  /** URL of the source. Not returned at the moment. */
  citeUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productReviewSchema: Schema<ProductReview> = s.object<ProductReview>(
  {
    source: s.optional(s.string()),
    theme: s.optional(s.string()),
    summary: s.optional(s.string()),
    sentiment: s.optional(s.lazy(() => sentimentSchema)),
    citation: s.optional(s.lazy(() => productCitationSchema)),
    rating: s.optional(s.float64()),
    numReviews: s.optional(s.int()),
    citeUrl: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
