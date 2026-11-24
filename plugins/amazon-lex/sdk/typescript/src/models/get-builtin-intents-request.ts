import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  localeAmazonLexModelBuildingV2BuiltinsApiSchema,
  type LocaleAmazonLexModelBuildingV2BuiltinsApi,
} from "./locale-amazon-lex-model-building-v2-builtins-api.js";

export type GetBuiltinIntentsRequest = {
  /** A list of locales that the intent supports. */
  locale?: LocaleAmazonLexModelBuildingV2BuiltinsApi;
  /**
   * Substring to match in built-in intent signatures. An intent will be returned if any part of its
   * signature matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To find
   * the signature for an intent, see Standard Built-in Intents in the Alexa Skills Kit.
   */
  signatureContains?: string;
  /**
   * A pagination token that fetches the next page of intents. If this API call is truncated, Amazon
   * Lex returns a pagination token in the response. To fetch the next page of intents, use the
   * pagination token in the next request.
   */
  nextToken?: string;
  /** The maximum number of intents to return in the response. The default is 10. */
  maxResults?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBuiltinIntentsRequestSchema: Schema<GetBuiltinIntentsRequest> =
  s.object<GetBuiltinIntentsRequest>(
    {
      locale: s.optional(s.lazy(() => localeAmazonLexModelBuildingV2BuiltinsApiSchema)),
      signatureContains: s.optional(s.string()),
      nextToken: s.optional(s.string()),
      maxResults: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
