import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { latLng4Schema, type LatLng4 } from "./lat-lng4.js";
import { locationTypeSchema, type LocationType } from "./location-type.js";
import { postalAddress2Schema, type PostalAddress2 } from "./postal-address2.js";

/** Location used as the destination in the commute calculation. */
export type Location2 = {
  /**
   * Radius in miles of the job location. This value is derived from the location bounding box in
   * which a circle with the specified radius centered from google.type.LatLng covers the area
   * associated with the job location. For example, currently, "Mountain View, CA, USA" has a radius
   * of 6.17 miles.
   */
  radiusMiles?: number;
  /**
   * The type of a location, which corresponds to the address lines field of
   * google.type.PostalAddress. For example, "Downtown, Atlanta, GA, USA" has a type of
   * LocationType.NEIGHBORHOOD, and "Kansas City, KS, USA" has a type of LocationType.LOCALITY.
   */
  locationType?: LocationType;
  /**
   * Postal address of the location that includes human readable information, such as postal
   * delivery and payments addresses. Given a postal address, a postal service can deliver items to
   * a premises, P.O. Box, or other delivery location.
   */
  postalAddress?: PostalAddress2;
  /** An object representing a latitude/longitude pair. */
  latLng?: LatLng4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const location2Schema: Schema<Location2> = s.object<Location2>(
  {
    radiusMiles: s.optional(s.float64()),
    locationType: s.optional(s.lazy(() => locationTypeSchema)),
    postalAddress: s.optional(s.lazy(() => postalAddress2Schema)),
    latLng: s.optional(s.lazy(() => latLng4Schema)),
  },
  { additionalProperties: s.json() },
);
