import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { builtinIntentMetadataSchema, type BuiltinIntentMetadata } from "./builtin-intent-metadata.js";

export type GetBuiltinIntentsResponse = {
  /** An array of builtinIntentMetadata objects, one for each intent in the response. */
  intents?: BuiltinIntentMetadata[];
  /**
   * A pagination token that fetches the next page of intents. If the response to this API call is
   * truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of
   * intents, specify the pagination token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getBuiltinIntentsResponseSchema: Schema<GetBuiltinIntentsResponse> =
  s.object<GetBuiltinIntentsResponse>(
    {
      intents: s.optional(s.array(s.lazy(() => builtinIntentMetadataSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
