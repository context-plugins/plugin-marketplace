import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gpsCoordinatesSchema, type GpsCoordinates } from "./gps-coordinates.js";

/** Place card from a Google AI answer that Google geo-tagged */
export type GoogleMapPlace = {
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
  placeId: string;
  /**
   * Phone number from the card's Call button, formatted as Google ships it for the locale. Omitted
   * when the card has no Call button.
   */
  phone?: string;
  /**
   * Business website from the card's Website button. Omitted when the card has no Website button.
   */
  website?: string;
  /** Google Maps URL for the place */
  link: string;
  /** Geographic coordinates of the place */
  gpsCoordinates: GpsCoordinates;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const googleMapPlaceProperties: s.Shape<GoogleMapPlace> = {
  title: s.string(),
  index: s.int(),
  thumbnail: s.optional(s.string()),
  rating: s.optional(s.float64()),
  reviews: s.optional(s.int()),
  type: s.optional(s.string()),
  address: s.optional(s.string()),
  status: s.optional(s.string()),
  placeId: s.string(),
  phone: s.optional(s.string()),
  website: s.optional(s.string()),
  link: s.string(),
  gpsCoordinates: gpsCoordinatesSchema,
};

export const googleMapPlaceInternalSchema: Schema<GoogleMapPlace> = s.object<GoogleMapPlace>(
  googleMapPlaceProperties,
  { additionalProperties: s.json() },
);

export const googleMapPlaceSchema: Schema<GoogleMapPlace> = s.lazySchema(() =>
  s.object<GoogleMapPlace>(
    {
      ...googleMapPlaceProperties,
      thumbnail: s.optional(s.string().check(s.url())),
      website: s.optional(s.string().check(s.url())),
      link: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
