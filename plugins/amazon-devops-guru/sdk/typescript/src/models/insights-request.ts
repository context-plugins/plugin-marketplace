import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  listInsightsStatusFilterSchema,
  type ListInsightsStatusFilter,
} from "./list-insights-status-filter.js";

export type InsightsRequest = {
  statusFilter: ListInsightsStatusFilter;
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results,
   * make another call with the returned nextToken value.
   */
  maxResults?: number;
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If this
   * value is null, it retrieves the first page.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightsRequestSchema: Schema<InsightsRequest> = s.object<InsightsRequest>(
  {
    statusFilter: listInsightsStatusFilterSchema,
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
    _keysMap: {
      statusFilter: "StatusFilter",
      maxResults: "MaxResults",
      nextToken: "NextToken",
    },
  },
  { additionalProperties: s.json() },
);
