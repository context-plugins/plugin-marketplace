import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SiteStats = {
  dateRange?: string;
  metrics?: Record<string, number>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const siteStatsSchema: Schema<SiteStats> = s.object<SiteStats>(
  {
    dateRange: s.optional(s.string()),
    metrics: s.optional(s.record(s.string(), s.float64())),
    _keysMap: {
      dateRange: "date_range",
    },
  },
  { additionalProperties: s.json() },
);
