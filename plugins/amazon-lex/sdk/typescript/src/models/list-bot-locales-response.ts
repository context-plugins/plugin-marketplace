import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botLocaleSummarySchema, type BotLocaleSummary } from "./bot-locale-summary.js";

export type ListBotLocalesResponse = {
  /** The identifier of the bot to list locales for. */
  botId?: string;
  /** The version of the bot. */
  botVersion?: string;
  /**
   * A token that indicates whether there are more results to return in a response to the
   * ListBotLocales operation. If the nextToken field is present, you send the contents as the
   * nextToken parameter of a ListBotLocales operation request to get the next page of results.
   */
  nextToken?: string;
  /**
   * Summary information for the locales that meet the filter criteria specified in the request. The
   * length of the list is specified in the maxResults parameter of the request. If there are more
   * locales available, the nextToken field contains a token to get the next page of results.
   */
  botLocaleSummaries?: BotLocaleSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotLocalesResponseSchema: Schema<ListBotLocalesResponse> = s.object<ListBotLocalesResponse>(
  {
    botId: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    nextToken: s.optional(s.string()),
    botLocaleSummaries: s.optional(s.array(s.lazy(() => botLocaleSummarySchema))),
  },
  { additionalProperties: s.json() },
);
