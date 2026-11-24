import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** General place or location information */
export type PlaceItem = {
  /** Place name */
  name?: string;
  /** Place page URL */
  url?: string;
  /** Place rating (0-5) */
  rating?: number;
  /** Address lines */
  address?: string[];
  /** Latitude */
  lat?: number;
  /** Longitude */
  lng?: number;
  /** Place categories */
  categories?: string[];
  /** Map URL */
  mapUrl?: string;
  /** Place image URLs */
  images?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const placeItemSchema: Schema<PlaceItem> = s.object<PlaceItem>(
  {
    name: s.optional(s.string()),
    url: s.optional(s.string()),
    rating: s.optional(s.float64()),
    address: s.optional(s.array(s.string())),
    lat: s.optional(s.float64()),
    lng: s.optional(s.float64()),
    categories: s.optional(s.array(s.string())),
    mapUrl: s.optional(s.string()),
    images: s.optional(s.array(s.string())),
    _keysMap: {
      mapUrl: "map_url",
    },
  },
  { additionalProperties: s.json() },
);
