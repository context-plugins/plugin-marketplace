import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botVersionSortBySchema, type BotVersionSortBy } from "./bot-version-sort-by.js";

export type ListBotVersionsRequest = {
  /** The identifier of the bot to list versions for. */
  botId: string;
  sortBy?: BotVersionSortBy;
  /**
   * The maximum number of versions to return in each page of results. If there are fewer results
   * than the max page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response to the ListBotVersion operation contains more results than specified in the
   * maxResults parameter, a token is returned in the response. Use that token in the nextToken
   * parameter to return the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotVersionsRequestSchema: Schema<ListBotVersionsRequest> = s.object<ListBotVersionsRequest>(
  {
    botId: s.string(),
    sortBy: s.optional(s.lazy(() => botVersionSortBySchema)),
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
