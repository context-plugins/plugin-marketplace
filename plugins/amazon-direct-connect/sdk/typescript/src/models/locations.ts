import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locationSchema, type Location } from "./location.js";

export type Locations = {
  /** The locations. */
  locations?: Location[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationsSchema: Schema<Locations> = s.object<Locations>(
  {
    locations: s.optional(s.array(s.lazy(() => locationSchema))),
  },
  { additionalProperties: s.json() },
);
