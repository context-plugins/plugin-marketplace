import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { geometrySchema, type Geometry } from "./geometry.js";

export type Location = {
  routeNo?: string;
  route?: string;
  postalCode?: string;
  suburb?: string;
  state?: string;
  country?: string;
  formattedAddress?: string;
  geometry?: Geometry;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationSchema: Schema<Location> = s.object<Location>(
  {
    routeNo: s.optional(s.string()),
    route: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    suburb: s.optional(s.string()),
    state: s.optional(s.string()),
    country: s.optional(s.string()),
    formattedAddress: s.optional(s.string()),
    geometry: s.optional(s.lazy(() => geometrySchema)),
  },
  { additionalProperties: s.json() },
);
