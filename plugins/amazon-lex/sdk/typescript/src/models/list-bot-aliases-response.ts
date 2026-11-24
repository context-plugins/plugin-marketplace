import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botAliasSummarySchema, type BotAliasSummary } from "./bot-alias-summary.js";

export type ListBotAliasesResponse = {
  /**
   * Summary information for the bot aliases that meet the filter criteria specified in the request.
   * The length of the list is specified in the maxResults parameter of the request. If there are
   * more aliases available, the nextToken field contains a token to get the next page of results.
   */
  botAliasSummaries?: BotAliasSummary[];
  /**
   * A token that indicates whether there are more results to return in a response to the
   * ListBotAliases operation. If the nextToken field is present, you send the contents as the
   * nextToken parameter of a ListBotAliases operation request to get the next page of results.
   */
  nextToken?: string;
  /** The identifier of the bot associated with the aliases. */
  botId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotAliasesResponseSchema: Schema<ListBotAliasesResponse> = s.object<ListBotAliasesResponse>(
  {
    botAliasSummaries: s.optional(s.array(s.lazy(() => botAliasSummarySchema))),
    nextToken: s.optional(s.string()),
    botId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
