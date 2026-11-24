import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botLocaleFilterSchema, type BotLocaleFilter } from "./bot-locale-filter.js";
import { botLocaleSortBySchema, type BotLocaleSortBy } from "./bot-locale-sort-by.js";

export type ListBotLocalesRequest = {
  /** The identifier of the bot to list locales for. */
  botId: string;
  /** The version of the bot to list locales for. */
  botVersion: string;
  sortBy?: BotLocaleSortBy;
  /**
   * Provides the specification for a filter used to limit the response to only those locales that
   * match the filter specification. You can only specify one filter and one value to filter on.
   */
  filters?: BotLocaleFilter[];
  /**
   * The maximum number of aliases to return in each page of results. If there are fewer results
   * than the max page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListBotLocales operation contains more results than specified in the
   * maxResults parameter, a token is returned in the response. Use that token as the nextToken
   * parameter to return the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotLocalesRequestSchema: Schema<ListBotLocalesRequest> = s.object<ListBotLocalesRequest>(
  {
    botId: s.string(),
    botVersion: s.string(),
    sortBy: s.optional(s.lazy(() => botLocaleSortBySchema)),
    filters: s.optional(s.array(s.lazy(() => botLocaleFilterSchema))),
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
