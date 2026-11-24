import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { proactiveInsightSummarySchema, type ProactiveInsightSummary } from "./proactive-insight-summary.js";
import { reactiveInsightSummarySchema, type ReactiveInsightSummary } from "./reactive-insight-summary.js";

export type SearchInsightsResponse = {
  /** The returned proactive insights. */
  proactiveInsights?: ProactiveInsightSummary[];
  /** The returned reactive insights. */
  reactiveInsights?: ReactiveInsightSummary[];
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there
   * are no more pages, this value is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchInsightsResponseSchema: Schema<SearchInsightsResponse> = s.object<SearchInsightsResponse>(
  {
    proactiveInsights: s.optional(s.array(s.lazy(() => proactiveInsightSummarySchema))),
    reactiveInsights: s.optional(s.array(s.lazy(() => reactiveInsightSummarySchema))),
    nextToken: s.optional(s.string()),
    _keysMap: {
      proactiveInsights: "ProactiveInsights",
      reactiveInsights: "ReactiveInsights",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
