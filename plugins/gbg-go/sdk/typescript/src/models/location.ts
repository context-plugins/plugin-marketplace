import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Location = {
  latitude?: string;
  longitude?: string;
  geoAccuracy?: string;
  /** A What3words designation associated with this location with '.' separator. */
  what3Words?: string;
};

export const locationSchema: Schema<Location> = s.object<Location>({
  latitude: s.optional(s.string()),
  longitude: s.optional(s.string()),
  geoAccuracy: s.optional(s.string()),
  what3Words: s.optional(s.string()),
  _keysMap: {
    what3Words: "what3words",
  },
});
