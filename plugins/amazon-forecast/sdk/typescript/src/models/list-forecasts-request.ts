import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterSchema, type Filter } from "./filter.js";

export type ListForecastsRequest = {
  /**
   * If the result of the previous request was truncated, the response includes a NextToken. To
   * retrieve the next set of results, use the token in the next request. Tokens expire after 24
   * hours.
   */
  nextToken?: string;
  /** The number of items to return in the response. */
  maxResults?: number;
  /**
   * An array of filters. For each filter, you provide a condition and a match statement. The
   * condition is either IS or IS_NOT, which specifies whether to include or exclude the forecasts
   * that match the statement from the list, respectively. The match statement consists of a key and
   * a value. Filter properties Condition - The condition to apply. Valid values are IS and IS_NOT.
   * To include the forecasts that match the statement, specify IS. To exclude matching forecasts,
   * specify IS_NOT. Key - The name of the parameter to filter on. Valid values are DatasetGroupArn,
   * PredictorArn, and Status. Value - Th
   */
  filters?: Filter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listForecastsRequestSchema: Schema<ListForecastsRequest> = s.object<ListForecastsRequest>(
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
