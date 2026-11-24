import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { listEventsFiltersSchema, type ListEventsFilters } from "./list-events-filters.js";

export type EventsRequest = {
  filters: ListEventsFilters;
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
  /** The ID of the Amazon Web Services account. */
  accountId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventsRequestSchema: Schema<EventsRequest> = s.object<EventsRequest>(
  {
    filters: listEventsFiltersSchema,
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
    accountId: s.optional(s.string()),
    _keysMap: {
      filters: "Filters",
      maxResults: "MaxResults",
      nextToken: "NextToken",
      accountId: "AccountId",
    },
  },
  { additionalProperties: s.json() },
);
