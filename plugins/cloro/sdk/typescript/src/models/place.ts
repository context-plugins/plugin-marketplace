import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Place = {
  /** Position index of the place in the results */
  index: number;
  /** Place name */
  title: string;
  /** Google URL for the place */
  link: string;
  /** Place photo URL */
  thumbnail?: string;
  /** Star rating (0-5) */
  rating?: number;
  /** Number of reviews */
  reviews?: number;
  /** Place type or category */
  type?: string;
  /** Short description of the place */
  description?: string;
  /** Nightly price as Gemini displays it */
  price?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const placeProperties: s.Shape<Place> = {
  index: s.int(),
  title: s.string(),
  link: s.string(),
  thumbnail: s.optional(s.string()),
  rating: s.optional(s.float64()),
  reviews: s.optional(s.int()),
  type: s.optional(s.string()),
  description: s.optional(s.string()),
  price: s.optional(s.string()),
};

export const placeInternalSchema: Schema<Place> = s.object<Place>(placeProperties, {
  additionalProperties: s.json(),
});

export const placeSchema: Schema<Place> = s.lazySchema(() =>
  s.object<Place>(
    {
      ...placeProperties,
      link: s.string().check(s.url()),
      thumbnail: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
