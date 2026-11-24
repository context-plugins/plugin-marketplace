import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  botRecommendationSummarySchema,
  type BotRecommendationSummary,
} from "./bot-recommendation-summary.js";

export type ListBotRecommendationsResponse = {
  /** The unique identifier of the bot that contains the bot recommendation list. */
  botId?: string;
  /** The version of the bot that contains the bot recommendation list. */
  botVersion?: string;
  /** The identifier of the language and locale of the bot recommendation list. */
  localeId?: string;
  /**
   * Summary information for the bot recommendations that meet the filter specified in this request.
   * The length of the list is specified in the maxResults parameter of the request. If there are
   * more bot recommendations available, the nextToken field contains a token to get the next page
   * of results.
   */
  botRecommendationSummaries?: BotRecommendationSummary[];
  /**
   * A token that indicates whether there are more results to return in a response to the
   * ListBotRecommendations operation. If the nextToken field is present, you send the contents as
   * the nextToken parameter of a ListBotRecommendations operation request to get the next page of
   * results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotRecommendationsResponseSchema: Schema<ListBotRecommendationsResponse> =
  s.object<ListBotRecommendationsResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      botRecommendationSummaries: s.optional(s.array(s.lazy(() => botRecommendationSummarySchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
