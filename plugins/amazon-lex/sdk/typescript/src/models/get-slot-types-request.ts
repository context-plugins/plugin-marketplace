import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetSlotTypesRequest = {
  /**
   * A pagination token that fetches the next page of slot types. If the response to this API call
   * is truncated, Amazon Lex returns a pagination token in the response. To fetch next page of slot
   * types, specify the pagination token in the next request.
   */
  nextToken?: string;
  /** The maximum number of slot types to return in the response. The default is 10. */
  maxResults?: number;
  /**
   * Substring to match in slot type names. A slot type will be returned if any part of its name
   * matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
   */
  nameContains?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getSlotTypesRequestSchema: Schema<GetSlotTypesRequest> = s.object<GetSlotTypesRequest>(
  {
    nextToken: s.optional(s.string()),
    maxResults: s.optional(s.int()),
    nameContains: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
