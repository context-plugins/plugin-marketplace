import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterSchema, type Filter } from "./filter.js";

export type ListMonitorsRequest = {
  /**
   * If the result of the previous request was truncated, the response includes a NextToken. To
   * retrieve the next set of results, use the token in the next request. Tokens expire after 24
   * hours.
   */
  nextToken?: string;
  /** The maximum number of monitors to include in the response. */
  maxResults?: number;
  /**
   * An array of filters. For each filter, provide a condition and a match statement. The condition
   * is either IS or IS_NOT, which specifies whether to include or exclude the resources that match
   * the statement from the list. The match statement consists of a key and a value. Filter
   * properties Condition - The condition to apply. Valid values are IS and IS_NOT. Key - The name
   * of the parameter to filter on. The only valid value is Status. Value - The value to match. For
   * example, to list all monitors who's status is ACTIVE, you would specify: "Filters": [ {
   * "Condition": "IS", "Key": "Status", "Value": "
   */
  filters?: Filter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMonitorsRequestSchema: Schema<ListMonitorsRequest> = s.object<ListMonitorsRequest>(
  {
    nextToken: s.optional(s.string()),
    maxResults: s.optional(s.int()),
    filters: s.optional(s.array(s.lazy(() => filterSchema))),
    _keysMap: {
      nextToken: "NextToken",
      maxResults: "MaxResults",
      filters: "Filters",
    },
  },
  { additionalProperties: s.json() },
);
