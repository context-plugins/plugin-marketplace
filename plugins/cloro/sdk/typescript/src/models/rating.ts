import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Product rating information */
export type Rating = {
  /** Rating value */
  value?: number;
  /** Number of ratings */
  count?: number;
  /** Maximum rating scale. May be null or absent. */
  maxRating?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ratingSchema: Schema<Rating> = s.object<Rating>(
  {
    value: s.optional(s.float64()),
    count: s.optional(s.int()),
    maxRating: s.optionalNullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
