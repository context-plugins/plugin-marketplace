import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botAliasMetadataSchema, type BotAliasMetadata } from "./bot-alias-metadata.js";

export type GetBotAliasesResponse = {
  /** An array of BotAliasMetadata objects, each describing a bot alias. */
  botAliases?: BotAliasMetadata[];
  /**
   * A pagination token for fetching next page of aliases. If the response to this call is
   * truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of
   * aliases, specify the pagination token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBotAliasesResponseSchema: Schema<GetBotAliasesResponse> = s.object<GetBotAliasesResponse>(
  {
    botAliases: s.optional(s.array(s.lazy(() => botAliasMetadataSchema))),
    nextToken: s.optional(s.string()),
    _keysMap: {
      botAliases: "BotAliases",
    },
  },
  { additionalProperties: s.json() },
);
