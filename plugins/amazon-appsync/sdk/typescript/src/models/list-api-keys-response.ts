import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiKeySchema, type ApiKey } from "./api-key.js";

export type ListApiKeysResponse = {
  /** The ApiKey objects. */
  apiKeys?: ApiKey[];
  /**
   * An identifier to pass in the next request to this operation to return the next set of items in
   * the list.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listApiKeysResponseSchema: Schema<ListApiKeysResponse> = s.object<ListApiKeysResponse>(
  {
    apiKeys: s.optional(s.array(s.lazy(() => apiKeySchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
