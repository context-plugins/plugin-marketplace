import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Fields shared by the place and map entries of a Google AI answer */
export type GooglePlaceBase = {
  /** Place name */
  title: string;
  /** Position index of the place in the results */
  index: number;
  /** Place thumbnail image URL */
  thumbnail?: string;
  /** Star rating (0-5) */
  rating?: number;
  /** Number of reviews */
  reviews?: number;
  /** Place type or category */
  type?: string;
  /** Full postal address, as Google gives it on the card's Directions link */
  address?: string;
  /** Operating status */
  status?: string;
  /**
   * Google Knowledge Graph ID for the place. A place and its `map` entry share it. Omitted when
   * Google did not geo-tag the card.
   */
  placeId?: string;
  /**
   * Phone number from the card's Call button, formatted as Google ships it for the locale. Omitted
   * when the card has no Call button.
   */
  phone?: string;
  /**
   * Business website from the card's Website button. Omitted when the card has no Website button.
   */
  website?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const googlePlaceBaseProperties: s.Shape<GooglePlaceBase> = {
  title: s.string(),
  index: s.int(),
  thumbnail: s.optional(s.string()),
  rating: s.optional(s.float64()),
  reviews: s.optional(s.int()),
  type: s.optional(s.string()),
  address: s.optional(s.string()),
  status: s.optional(s.string()),
  placeId: s.optional(s.string()),
  phone: s.optional(s.string()),
  website: s.optional(s.string()),
};

export const googlePlaceBaseInternalSchema: Schema<GooglePlaceBase> = s.object<GooglePlaceBase>(
  googlePlaceBaseProperties,
  { additionalProperties: s.json() },
);

export const googlePlaceBaseSchema: Schema<GooglePlaceBase> = s.lazySchema(() =>
  s.object<GooglePlaceBase>(
    {
      ...googlePlaceBaseProperties,
      thumbnail: s.optional(s.string().check(s.url())),
      website: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
