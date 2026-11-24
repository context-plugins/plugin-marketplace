import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { amenitySchema, type Amenity } from "./amenity.js";
import { locationInternalSchema, locationSchema, type Location } from "./location.js";
import { platformSchema, type Platform } from "./platform.js";
import { propertyTypeSchema, type PropertyType } from "./property-type.js";
import { bathroomsInternalSchema, bathroomsSchema, type Bathrooms } from "./unions/bathrooms.js";
import { bedroomsInternalSchema, bedroomsSchema, type Bedrooms } from "./unions/bedrooms.js";
import { guestRatingInternalSchema, guestRatingSchema, type GuestRating } from "./unions/guest-rating.js";
import { host1Schema, type Host1 } from "./unions/host1.js";
import { identity1InternalSchema, identity1Schema, type Identity1 } from "./unions/identity1.js";
import { maxOccupancyInternalSchema, maxOccupancySchema, type MaxOccupancy } from "./unions/max-occupancy.js";
import { price1InternalSchema, price1Schema, type Price1 } from "./unions/price1.js";
import { ratingScaleInternalSchema, ratingScaleSchema, type RatingScale } from "./unions/rating-scale.js";
import { reviewCountInternalSchema, reviewCountSchema, type ReviewCount } from "./unions/review-count.js";
import { starRatingInternalSchema, starRatingSchema, type StarRating } from "./unions/star-rating.js";

/** Endpoint-specific data payload. */
export type AnyData = {
  id: string;
  platform: Platform;
  platformListingId: string;
  url: string;
  name: string;
  propertyType: PropertyType;
  location: Location;
  starRating: StarRating;
  guestRating: GuestRating;
  ratingScale: RatingScale;
  reviewCount: ReviewCount;
  maxOccupancy: MaxOccupancy;
  bedrooms: Bedrooms;
  bathrooms: Bathrooms;
  amenities: Amenity[];
  images: string[];
  host: Host1;
  price?: Price1;
  identity?: Identity1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const anyDataProperties: s.Shape<AnyData> = {
  id: s.string(),
  platform: platformSchema,
  platformListingId: s.string(),
  url: s.string(),
  name: s.string(),
  propertyType: propertyTypeSchema,
  location: locationInternalSchema,
  starRating: starRatingInternalSchema,
  guestRating: guestRatingInternalSchema,
  ratingScale: ratingScaleInternalSchema,
  reviewCount: reviewCountInternalSchema,
  maxOccupancy: maxOccupancyInternalSchema,
  bedrooms: bedroomsInternalSchema,
  bathrooms: bathroomsInternalSchema,
  amenities: s.array(s.lazy(() => amenitySchema)),
  images: s.array(s.string()),
  host: host1Schema,
  price: s.optional(s.lazy(() => price1InternalSchema)),
  identity: s.optional(s.lazy(() => identity1InternalSchema)),
};

export const anyDataInternalSchema: Schema<AnyData> = s.object<AnyData>(anyDataProperties, {
  additionalProperties: s.json(),
});

export const anyDataSchema: Schema<AnyData> = s.lazySchema(() =>
  s.object<AnyData>(
    {
      ...anyDataProperties,
      id: s.string().check(s.minLength(1)),
      platformListingId: s.string().check(s.minLength(1)),
      url: s.string().check(s.url()),
      name: s.string().check(s.minLength(1)),
      location: locationSchema,
      starRating: starRatingSchema,
      guestRating: guestRatingSchema,
      ratingScale: ratingScaleSchema,
      reviewCount: reviewCountSchema,
      maxOccupancy: maxOccupancySchema,
      bedrooms: bedroomsSchema,
      bathrooms: bathroomsSchema,
      images: s.array(s.string().check(s.url())),
      price: s.optional(s.lazy(() => price1Schema)),
      identity: s.optional(s.lazy(() => identity1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
