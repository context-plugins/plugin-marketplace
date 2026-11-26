import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { timeRange1Schema, type TimeRange1 } from "./time-range1.js";

/** How the request was interpreted and searched. */
export type Intent = {
  /** Keywords sent to the engines, with platform and time phrases removed. */
  searchQuery: string;
  /** Engines searched. */
  sources: string[];
  /** Publication window applied, or null for none. */
  timeRange: TimeRange1 | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentSchema: Schema<Intent> = s.object<Intent>(
  {
    searchQuery: s.string(),
    sources: s.array(s.string()),
    timeRange: s.nullable(s.lazy(() => timeRange1Schema)),
    _keysMap: {
      searchQuery: "search_query",
      timeRange: "time_range",
    },
  },
  { additionalProperties: s.json() },
);
