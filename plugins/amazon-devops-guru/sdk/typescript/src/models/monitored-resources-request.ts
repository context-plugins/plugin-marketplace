import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  listMonitoredResourcesFiltersSchema,
  type ListMonitoredResourcesFilters,
} from "./list-monitored-resources-filters.js";

export type MonitoredResourcesRequest = {
  filters?: ListMonitoredResourcesFilters;
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

export const monitoredResourcesRequestSchema: Schema<MonitoredResourcesRequest> =
  s.object<MonitoredResourcesRequest>(
    {
      filters: s.optional(s.lazy(() => listMonitoredResourcesFiltersSchema)),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
      _keysMap: {
        filters: "Filters",
        maxResults: "MaxResults",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
