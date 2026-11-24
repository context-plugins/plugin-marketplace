import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botVersionSummarySchema, type BotVersionSummary } from "./bot-version-summary.js";

export type ListBotVersionsResponse = {
  /** The identifier of the bot to list versions for. */
  botId?: string;
  /**
   * Summary information for the bot versions that meet the filter criteria specified in the
   * request. The length of the list is specified in the maxResults parameter of the request. If
   * there are more versions available, the nextToken field contains a token to get the next page of
   * results.
   */
  botVersionSummaries?: BotVersionSummary[];
  /**
   * A token that indicates whether there are more results to return in a response to the
   * ListBotVersions operation. If the nextToken field is present, you send the contents as the
   * nextToken parameter of a ListBotAliases operation request to get the next page of results.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBotVersionsResponseSchema: Schema<ListBotVersionsResponse> =
  s.object<ListBotVersionsResponse>(
    {
      botId: s.optional(s.string()),
      botVersionSummaries: s.optional(s.array(s.lazy(() => botVersionSummarySchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
