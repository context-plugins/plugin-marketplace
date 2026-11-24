import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Hotel listing with detailed information */
export type HotelItem = {
  /** Hotel name */
  name?: string;
  /** Hotel page URL */
  url?: string;
  /** Hotel rating (0-5) */
  rating?: number;
  /** Number of reviews */
  numReviews?: number;
  /** Address lines */
  address?: string[];
  /** Phone number */
  phone?: string;
  /** Hotel description */
  description?: string;
  /** Main hotel image URL */
  imageUrl?: string;
  /** Additional hotel image URLs */
  images?: string[];
  /** Latitude */
  lat?: number;
  /** Longitude */
  lng?: number;
  /** Price level indicator */
  priceLevel?: string;
  /** Hotel categories */
  categories?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hotelItemSchema: Schema<HotelItem> = s.object<HotelItem>(
  {
    name: s.optional(s.string()),
    url: s.optional(s.string()),
    rating: s.optional(s.float64()),
    numReviews: s.optional(s.float64()),
    address: s.optional(s.array(s.string())),
    phone: s.optional(s.string()),
    description: s.optional(s.string()),
    imageUrl: s.optional(s.string()),
    images: s.optional(s.array(s.string())),
    lat: s.optional(s.float64()),
    lng: s.optional(s.float64()),
    priceLevel: s.optional(s.string()),
    categories: s.optional(s.array(s.string())),
    _keysMap: {
      numReviews: "num_reviews",
      imageUrl: "image_url",
      priceLevel: "price_level",
    },
  },
  { additionalProperties: s.json() },
);
