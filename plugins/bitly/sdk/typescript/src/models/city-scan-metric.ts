import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CityScanMetric = {
  scans?: number;
  city?: string;
  subregion?: string;
  region?: string;
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cityScanMetricSchema: Schema<CityScanMetric> = s.object<CityScanMetric>(
  {
    scans: s.optional(s.int()),
    city: s.optional(s.string()),
    subregion: s.optional(s.string()),
    region: s.optional(s.string()),
    country: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
