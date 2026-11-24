import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { botMetadataSchema, type BotMetadata } from "./bot-metadata.js";

export type GetBotVersionsResponse = {
  /**
   * An array of BotMetadata objects, one for each numbered version of the bot plus one for the
   * $LATEST version.
   */
  bots?: BotMetadata[];
  /**
   * A pagination token for fetching the next page of bot versions. If the response to this call is
   * truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of
   * versions, specify the pagination token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBotVersionsResponseSchema: Schema<GetBotVersionsResponse> = s.object<GetBotVersionsResponse>(
  {
    bots: s.optional(s.array(s.lazy(() => botMetadataSchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
