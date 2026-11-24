import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { searchInsightsFiltersSchema, type SearchInsightsFilters } from "./search-insights-filters.js";
import { startTimeRangeSchema, type StartTimeRange } from "./start-time-range.js";
import { type3Schema, type Type3 } from "./type3.js";

export type InsightsSearchRequest = {
  startTimeRange: StartTimeRange;
  filters?: SearchInsightsFilters;
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
  /** The type of insights you are searching for (REACTIVE or PROACTIVE). */
  type: Type3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightsSearchRequestSchema: Schema<InsightsSearchRequest> = s.object<InsightsSearchRequest>(
  {
    startTimeRange: startTimeRangeSchema,
    filters: s.optional(s.lazy(() => searchInsightsFiltersSchema)),
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
    type: type3Schema,
    _keysMap: {
      startTimeRange: "StartTimeRange",
      filters: "Filters",
      maxResults: "MaxResults",
      nextToken: "NextToken",
      type: "Type",
    },
  },
  { additionalProperties: s.json() },
);
