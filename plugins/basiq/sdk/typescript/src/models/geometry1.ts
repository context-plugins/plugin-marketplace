import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Contains the lat and lng coordinates of the merchant location. */
export type Geometry1 = {
  lat?: string;
  lng?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const geometry1Schema: Schema<Geometry1> = s.object<Geometry1>(
  {
    lat: s.optional(s.string()),
    lng: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
