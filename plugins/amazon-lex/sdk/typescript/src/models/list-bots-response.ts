import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botSummarySchema, type BotSummary } from "./bot-summary.js";

export type ListBotsResponse = {
  /**
   * Summary information for the bots that meet the filter criteria specified in the request. The
   * length of the list is specified in the maxResults parameter of the request. If there are more
   * bots available, the nextToken field contains a token to the next page of results.
   */
  botSummaries?: BotSummary[];
  /**
   * A token that indicates whether there are more results to return in a response to the ListBots
   * operation. If the nextToken field is present, you send the contents as the nextToken parameter
   * of a ListBots operation request to get the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotsResponseSchema: Schema<ListBotsResponse> = s.object<ListBotsResponse>(
  {
    botSummaries: s.optional(s.array(s.lazy(() => botSummarySchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
