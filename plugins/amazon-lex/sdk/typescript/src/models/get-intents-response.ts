import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { intentMetadataSchema, type IntentMetadata } from "./intent-metadata.js";

export type GetIntentsResponse = {
  /** An array of Intent objects. For more information, see PutBot. */
  intents?: IntentMetadata[];
  /**
   * If the response is truncated, the response includes a pagination token that you can specify in
   * your next request to fetch the next page of intents.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getIntentsResponseSchema: Schema<GetIntentsResponse> = s.object<GetIntentsResponse>(
  {
    intents: s.optional(s.array(s.lazy(() => intentMetadataSchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
