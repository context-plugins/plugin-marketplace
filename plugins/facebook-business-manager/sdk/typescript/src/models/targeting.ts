import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { geoLocationsSchema, type GeoLocations } from "./geo-locations.js";
import { interestSchema, type Interest } from "./interest.js";

/** Targeting specification for the ad set */
export type Targeting = {
  ageMin?: number;
  ageMax?: number;
  genders?: number[];
  geoLocations?: GeoLocations;
  interests?: Interest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const targetingProperties: s.Shape<Targeting> = {
  ageMin: s.optional(s.int()),
  ageMax: s.optional(s.int()),
  genders: s.optional(s.array(s.int())),
  geoLocations: s.optional(s.lazy(() => geoLocationsSchema)),
  interests: s.optional(s.array(s.lazy(() => interestSchema))),
  _keysMap: {
    ageMin: "age_min",
    ageMax: "age_max",
    geoLocations: "geo_locations",
  },
};

export const targetingInternalSchema: Schema<Targeting> = s.object<Targeting>(targetingProperties, {
  additionalProperties: s.json(),
});

export const targetingSchema: Schema<Targeting> = s.lazySchema(() =>
  s.object<Targeting>(
    {
      ...targetingProperties,
      ageMin: s.optional(s.int().check(s.gte(18))),
      ageMax: s.optional(s.int().check(s.lte(65))),
    },
    { additionalProperties: s.json() },
  ),
);
