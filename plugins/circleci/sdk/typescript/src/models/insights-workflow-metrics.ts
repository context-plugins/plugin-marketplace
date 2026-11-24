import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { item2Schema, type Item2 } from "./item2.js";

export type InsightsWorkflowMetrics = {
  /** List of workflow metric summaries */
  items?: Item2[];
  /** Token for retrieving the next page */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightsWorkflowMetricsSchema: Schema<InsightsWorkflowMetrics> =
  s.object<InsightsWorkflowMetrics>(
    {
      items: s.optional(s.array(s.lazy(() => item2Schema))),
      nextPageToken: s.optional(s.string()),
      _keysMap: {
        nextPageToken: "next_page_token",
      },
    },
    { additionalProperties: s.json() },
  );
