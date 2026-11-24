import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { geoItemSchema, type GeoItem } from "./geo-item.js";

/** A list of geographic locations for audience targeting. */
export type GeoList = {
  /** Array of geographic location objects. */
  data?: GeoItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const geoListSchema: Schema<GeoList> = s.object<GeoList>(
  {
    data: s.optional(s.array(s.lazy(() => geoItemSchema))),
  },
  { additionalProperties: s.json() },
);
