import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  recommendedIntentSummarySchema,
  type RecommendedIntentSummary,
} from "./recommended-intent-summary.js";

export type ListRecommendedIntentsResponse = {
  /** The unique identifier of the bot associated with the recommended intent. */
  botId?: string;
  /** The version of the bot that contains the intent. */
  botVersion?: string;
  /**
   * The identifier of the language and locale of the intents to list. The string must match one of
   * the supported locales. For more information, see Supported languages.
   */
  localeId?: string;
  /** The identifier of the bot recommendation that contains the recommended intent. */
  botRecommendationId?: string;
  /**
   * Summary information for the intents that meet the filter criteria specified in the request. The
   * length of the list is specified in the maxResults parameter of the request. If there are more
   * intents available, the nextToken field contains a token to get the next page of results.
   */
  summaryList?: RecommendedIntentSummary[];
  /**
   * A token that indicates whether there are more results to return in a response to the
   * ListRecommendedIntents operation. If the nextToken field is present, you send the contents as
   * the nextToken parameter of a ListRecommendedIntents operation request to get the next page of
   * results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listRecommendedIntentsResponseSchema: Schema<ListRecommendedIntentsResponse> =
  s.object<ListRecommendedIntentsResponse>(
    {
      botId: s.optional(s.string()),
      botVersion: s.optional(s.string()),
      localeId: s.optional(s.string()),
      botRecommendationId: s.optional(s.string()),
      summaryList: s.optional(s.array(s.lazy(() => recommendedIntentSummarySchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
