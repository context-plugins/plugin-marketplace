import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";
import { photoInternalSchema, photoSchema, type Photo } from "./photo.js";
import { reviewInternalSchema, reviewSchema, type Review } from "./review.js";

export type Map = {
  /** Business name */
  name?: string;
  /** Position in results (1-indexed) */
  position?: number;
  /** Google Place ID */
  placeId?: string;
  /** Business location */
  location?: Location;
  /** Contact phone number */
  phoneNumber?: string;
  /** Business website URL */
  url?: string;
  /** Review aggregations from providers */
  reviews?: Review[];
  /** Business photos */
  photos?: Photo[];
  /** Current open/closed status */
  openState?: string;
  /** Business category */
  category?: string;
  /** Price level (if available) */
  price?: Record<string, unknown>;
  /** Map layer grouping label */
  layerLabel?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mapProperties: s.Shape<Map> = {
  name: s.optional(s.string()),
  position: s.optional(s.int()),
  placeId: s.optional(s.string()),
  location: s.optional(s.lazy(() => locationSchema)),
  phoneNumber: s.optional(s.string()),
  url: s.optional(s.string()),
  reviews: s.optional(s.array(s.lazy(() => reviewInternalSchema))),
  photos: s.optional(s.array(s.lazy(() => photoInternalSchema))),
  openState: s.optional(s.string()),
  category: s.optional(s.string()),
  price: s.optional(s.record(s.string(), s.unknown())),
  layerLabel: s.optional(s.string()),
};

export const mapInternalSchema: Schema<Map> = s.object<Map>(mapProperties, {
  additionalProperties: s.json(),
});

export const mapSchema: Schema<Map> = s.lazySchema(() =>
  s.object<Map>(
    {
      ...mapProperties,
      url: s.optional(s.string().check(s.url())),
      reviews: s.optional(s.array(s.lazy(() => reviewSchema))),
      photos: s.optional(s.array(s.lazy(() => photoSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
