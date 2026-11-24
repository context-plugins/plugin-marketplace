import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiKeySchema, type ApiKey } from "./api-key.js";

export type ApiKeyList = {
  keys: ApiKey[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiKeyListSchema: Schema<ApiKeyList> = s.object<ApiKeyList>(
  {
    keys: s.array(s.lazy(() => apiKeySchema)),
  },
  { additionalProperties: s.json() },
);
