import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { locale1Schema, type Locale1 } from "./locale1.js";

export type GetBuiltinSlotTypesRequest = {
  /** A list of locales that the slot type supports. */
  locale?: Locale1;
  /**
   * Substring to match in built-in slot type signatures. A slot type will be returned if any part
   * of its signature matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
   */
  signatureContains?: string;
  /**
   * A pagination token that fetches the next page of slot types. If the response to this API call
   * is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of
   * slot types, specify the pagination token in the next request.
   */
  nextToken?: string;
  /** The maximum number of slot types to return in the response. The default is 10. */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBuiltinSlotTypesRequestSchema: Schema<GetBuiltinSlotTypesRequest> =
  s.object<GetBuiltinSlotTypesRequest>(
    {
      locale: s.optional(s.lazy(() => locale1Schema)),
      signatureContains: s.optional(s.string()),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
