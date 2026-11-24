import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetBotVersionsRequest = {
  /** The name of the bot for which versions should be returned. */
  name: string;
  /**
   * A pagination token for fetching the next page of bot versions. If the response to this call is
   * truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of
   * versions, specify the pagination token in the next request.
   */
  nextToken?: string;
  /** The maximum number of bot versions to return in the response. The default is 10. */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBotVersionsRequestSchema: Schema<GetBotVersionsRequest> = s.object<GetBotVersionsRequest>(
  {
    name: s.string(),
    nextToken: s.optional(s.string()),
    maxResults: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
