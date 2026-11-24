import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { coordinateSchema, type Coordinate } from "./coordinate.js";

/** Geographic location of the publisher, when available. */
export type SourceLocation = {
  /** Country where the publisher is located. */
  country?: string | null;
  /** State or region where the publisher is located. */
  state?: string | null;
  /** County where the publisher is located. */
  county?: string | null;
  /** City where the publisher is located. */
  city?: string | null;
  coordinates?: Coordinate;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceLocationSchema: Schema<SourceLocation> = s.object<SourceLocation>(
  {
    country: s.optionalNullable(s.string()),
    state: s.optionalNullable(s.string()),
    county: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    coordinates: s.optional(s.lazy(() => coordinateSchema)),
  },
  { additionalProperties: s.json() },
);
