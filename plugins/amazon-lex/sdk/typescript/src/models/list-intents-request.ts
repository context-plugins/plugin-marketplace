import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { intentFilterSchema, type IntentFilter } from "./intent-filter.js";
import { intentSortBySchema, type IntentSortBy } from "./intent-sort-by.js";

export type ListIntentsRequest = {
  /** The unique identifier of the bot that contains the intent. */
  botId: string;
  /** The version of the bot that contains the intent. */
  botVersion: string;
  /**
   * The identifier of the language and locale of the intents to list. The string must match one of
   * the supported locales. For more information, see Supported languages.
   */
  localeId: string;
  sortBy?: IntentSortBy;
  /**
   * Provides the specification of a filter used to limit the intents in the response to only those
   * that match the filter specification. You can only specify one filter and only one string to
   * filter on.
   */
  filters?: IntentFilter[];
  /**
   * The maximum number of intents to return in each page of results. If there are fewer results
   * than the max page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListIntents operation contains more results than specified in the
   * maxResults parameter, a token is returned in the response. Use the returned token in the
   * nextToken parameter of a ListIntents request to return the next page of results. For a complete
   * set of results, call the ListIntents operation until the nextToken returned in the response is
   * null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listIntentsRequestSchema: Schema<ListIntentsRequest> = s.object<ListIntentsRequest>(
  {
    botId: s.string(),
    botVersion: s.string(),
    localeId: s.string(),
    sortBy: s.optional(s.lazy(() => intentSortBySchema)),
    filters: s.optional(s.array(s.lazy(() => intentFilterSchema))),
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
