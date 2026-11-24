import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";

export type InsightsJobMetrics = {
  /** List of job metric summaries */
  items?: Item[];
  /** Token for retrieving the next page */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightsJobMetricsSchema: Schema<InsightsJobMetrics> = s.object<InsightsJobMetrics>(
  {
    items: s.optional(s.array(s.lazy(() => itemSchema))),
    nextPageToken: s.optional(s.string()),
    _keysMap: {
      nextPageToken: "next_page_token",
    },
  },
  { additionalProperties: s.json() },
);
