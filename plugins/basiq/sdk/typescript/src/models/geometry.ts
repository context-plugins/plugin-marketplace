import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Geometry = {
  lat?: string;
  lng?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const geometrySchema: Schema<Geometry> = s.object<Geometry>(
  {
    lat: s.optional(s.string()),
    lng: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
