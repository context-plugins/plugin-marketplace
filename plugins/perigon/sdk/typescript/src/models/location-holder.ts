import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Locations most strongly associated with the story. */
export type LocationHolder = {
  /** Country central to the article. */
  country?: string | null;
  /** State or region central to the article. */
  state?: string | null;
  /** County central to the article. */
  county?: string | null;
  /** City central to the article. */
  city?: string | null;
  /** Neighborhood, borough, or district central to the article. */
  area?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationHolderSchema: Schema<LocationHolder> = s.object<LocationHolder>(
  {
    country: s.optionalNullable(s.string()),
    state: s.optionalNullable(s.string()),
    county: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    area: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
