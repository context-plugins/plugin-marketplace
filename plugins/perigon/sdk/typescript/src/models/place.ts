import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { coordinateSchema, type Coordinate } from "./coordinate.js";

/** Structured geographic places extracted from the article. */
export type Place = {
  /** OpenStreetMap identifier for the place. */
  osmId?: string | null;
  /** Road associated with the place. */
  road?: string | null;
  /** Quarter associated with the place. */
  quarter?: string | null;
  /** Suburb associated with the place. */
  suburb?: string | null;
  /** City associated with the place. */
  city?: string | null;
  /** Town associated with the place. */
  town?: string | null;
  /** County associated with the place. */
  county?: string | null;
  /** State district associated with the place. */
  stateDistrict?: string | null;
  /** State or region associated with the place. */
  state?: string | null;
  /** Postal code associated with the place. */
  postcode?: string | null;
  /** Country associated with the place. */
  country?: string | null;
  /** Two-character country code for the place. */
  countryCode?: string | null;
  /** Named amenity associated with the place. */
  amenity?: string | null;
  /** Neighborhood associated with the place. */
  neighbourhood?: string | null;
  coordinates?: Coordinate;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const placeSchema: Schema<Place> = s.object<Place>(
  {
    osmId: s.optionalNullable(s.string()),
    road: s.optionalNullable(s.string()),
    quarter: s.optionalNullable(s.string()),
    suburb: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    town: s.optionalNullable(s.string()),
    county: s.optionalNullable(s.string()),
    stateDistrict: s.optionalNullable(s.string()),
    state: s.optionalNullable(s.string()),
    postcode: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    countryCode: s.optionalNullable(s.string()),
    amenity: s.optionalNullable(s.string()),
    neighbourhood: s.optionalNullable(s.string()),
    coordinates: s.optional(s.lazy(() => coordinateSchema)),
  },
  { additionalProperties: s.json() },
);
