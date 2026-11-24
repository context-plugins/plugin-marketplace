import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetBotChannelAssociationsRequest = {
  /** The name of the Amazon Lex bot in the association. */
  botName: string;
  /**
   * An alias pointing to the specific version of the Amazon Lex bot to which this association is
   * being made.
   */
  botAlias: string;
  /**
   * A pagination token for fetching the next page of associations. If the response to this call is
   * truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of
   * associations, specify the pagination token in the next request.
   */
  nextToken?: string;
  /** The maximum number of associations to return in the response. The default is 50. */
  maxResults?: number;
  /**
   * Substring to match in channel association names. An association will be returned if any part of
   * its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To
   * return all bot channel associations, use a hyphen ("-") as the nameContains parameter.
   */
  nameContains?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBotChannelAssociationsRequestSchema: Schema<GetBotChannelAssociationsRequest> =
  s.object<GetBotChannelAssociationsRequest>(
    {
      botName: s.string(),
      botAlias: s.string(),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
      nameContains: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
