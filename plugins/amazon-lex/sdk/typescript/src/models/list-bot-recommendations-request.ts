import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListBotRecommendationsRequest = {
  /** The unique identifier of the bot that contains the bot recommendation list. */
  botId: string;
  /** The version of the bot that contains the bot recommendation list. */
  botVersion: string;
  /** The identifier of the language and locale of the bot recommendation list. */
  localeId: string;
  /**
   * The maximum number of bot recommendations to return in each page of results. If there are fewer
   * results than the max page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListBotRecommendation operation contains more results than specified
   * in the maxResults parameter, a token is returned in the response. Use that token in the
   * nextToken parameter to return the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotRecommendationsRequestSchema: Schema<ListBotRecommendationsRequest> =
  s.object<ListBotRecommendationsRequest>(
    {
      botId: s.string(),
      botVersion: s.string(),
      localeId: s.string(),
      maxResults: s.optional(s.int()),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
