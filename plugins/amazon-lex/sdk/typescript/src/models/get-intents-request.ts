import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetIntentsRequest = {
  /**
   * A pagination token that fetches the next page of intents. If the response to this API call is
   * truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of
   * intents, specify the pagination token in the next request.
   */
  nextToken?: string;
  /** The maximum number of intents to return in the response. The default is 10. */
  maxResults?: number;
  /**
   * Substring to match in intent names. An intent will be returned if any part of its name matches
   * the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
   */
  nameContains?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getIntentsRequestSchema: Schema<GetIntentsRequest> = s.object<GetIntentsRequest>(
  {
    nextToken: s.optional(s.string()),
    maxResults: s.optional(s.int()),
    nameContains: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
