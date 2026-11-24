import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetBotAliasesRequest = {
  /** The name of the bot. */
  botName: string;
  /**
   * A pagination token for fetching the next page of aliases. If the response to this call is
   * truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of
   * aliases, specify the pagination token in the next request.
   */
  nextToken?: string;
  /** The maximum number of aliases to return in the response. The default is 50. . */
  maxResults?: number;
  /**
   * Substring to match in bot alias names. An alias will be returned if any part of its name
   * matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
   */
  nameContains?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBotAliasesRequestSchema: Schema<GetBotAliasesRequest> = s.object<GetBotAliasesRequest>(
  {
    botName: s.string(),
    nextToken: s.optional(s.string()),
    maxResults: s.optional(s.int()),
    nameContains: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
