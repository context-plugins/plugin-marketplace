import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { item1Schema, type Item1 } from "./item1.js";

export type InsightsWorkflowRuns = {
  /** List of workflow runs */
  items?: Item1[];
  /** Token for retrieving the next page */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightsWorkflowRunsSchema: Schema<InsightsWorkflowRuns> = s.object<InsightsWorkflowRuns>(
  {
    items: s.optional(s.array(s.lazy(() => item1Schema))),
    nextPageToken: s.optional(s.string()),
    _keysMap: {
      nextPageToken: "next_page_token",
    },
  },
  { additionalProperties: s.json() },
);
