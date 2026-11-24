import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Locations associated with the story and their article counts. */
export type LocationCount = {
  /** Country associated with the story. */
  country?: string | null;
  /** State or region associated with the story. */
  state?: string | null;
  /** County associated with the story. */
  county?: string | null;
  /** City associated with the story. */
  city?: string | null;
  /** Neighborhood, borough, or district associated with the story. */
  area?: string | null;
  /** Number of story articles associated with the location. */
  count?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationCountSchema: Schema<LocationCount> = s.object<LocationCount>(
  {
    country: s.optionalNullable(s.string()),
    state: s.optionalNullable(s.string()),
    county: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    area: s.optionalNullable(s.string()),
    count: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
