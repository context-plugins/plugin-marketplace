import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { intentMetadataSchema, type IntentMetadata } from "./intent-metadata.js";

export type GetIntentVersionsResponse = {
  /**
   * An array of IntentMetadata objects, one for each numbered version of the intent plus one for
   * the $LATEST version.
   */
  intents?: IntentMetadata[];
  /**
   * A pagination token for fetching the next page of intent versions. If the response to this call
   * is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of
   * versions, specify the pagination token in the next request.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getIntentVersionsResponseSchema: Schema<GetIntentVersionsResponse> =
  s.object<GetIntentVersionsResponse>(
    {
      intents: s.optional(s.array(s.lazy(() => intentMetadataSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
