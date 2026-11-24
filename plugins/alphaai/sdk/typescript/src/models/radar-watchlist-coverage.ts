import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RadarWatchlistCoverage = {
  noRecentNews: string[];
  notInSnapshot: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const radarWatchlistCoverageSchema: Schema<RadarWatchlistCoverage> = s.object<RadarWatchlistCoverage>(
  {
    noRecentNews: s.array(s.string()),
    notInSnapshot: s.array(s.string()),
    _keysMap: {
      noRecentNews: "no_recent_news",
      notInSnapshot: "not_in_snapshot",
    },
  },
  { additionalProperties: s.json() },
);
