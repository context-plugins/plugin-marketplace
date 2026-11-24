import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botFilterSchema, type BotFilter } from "./bot-filter.js";
import { botSortBySchema, type BotSortBy } from "./bot-sort-by.js";

export type ListBotsRequest = {
  sortBy?: BotSortBy;
  /**
   * Provides the specification of a filter used to limit the bots in the response to only those
   * that match the filter specification. You can only specify one filter and one string to filter
   * on.
   */
  filters?: BotFilter[];
  /**
   * The maximum number of bots to return in each page of results. If there are fewer results than
   * the maximum page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListBots operation contains more results than specified in the
   * maxResults parameter, a token is returned in the response. Use the returned token in the
   * nextToken parameter of a ListBots request to return the next page of results. For a complete
   * set of results, call the ListBots operation until the nextToken returned in the response is
   * null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotsRequestSchema: Schema<ListBotsRequest> = s.object<ListBotsRequest>(
  {
    sortBy: s.optional(s.lazy(() => botSortBySchema)),
    filters: s.optional(s.array(s.lazy(() => botFilterSchema))),
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
