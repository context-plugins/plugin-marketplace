import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A geographic location item for audience targeting. */
export type GeoItem = {
  /** Unique identifier of the geographic location. */
  uid?: string;
  /** Display name of the location. */
  name?: string;
  /** ISO code for the location (country code, region code, etc.). */
  code?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const geoItemSchema: Schema<GeoItem> = s.object<GeoItem>(
  {
    uid: s.optional(s.string()),
    name: s.optional(s.string()),
    code: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
