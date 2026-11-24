import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Review = {
  /** Number of reviews */
  count?: number;
  /** Average rating */
  rating?: number;
  /** Review provider name */
  providerName?: string;
  /** Provider icon URL */
  providerIconUrl?: string;
  /** Reviews page URL */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const reviewProperties: s.Shape<Review> = {
  count: s.optional(s.int()),
  rating: s.optional(s.float64()),
  providerName: s.optional(s.string()),
  providerIconUrl: s.optional(s.string()),
  url: s.optional(s.string()),
};

export const reviewInternalSchema: Schema<Review> = s.object<Review>(reviewProperties, {
  additionalProperties: s.json(),
});

export const reviewSchema: Schema<Review> = s.lazySchema(() =>
  s.object<Review>(
    {
      ...reviewProperties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
