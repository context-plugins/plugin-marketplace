import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiKeySchema, type ApiKey } from "./api-key.js";

export type CreateApiKeyResponse = {
  apiKey?: ApiKey;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createApiKeyResponseSchema: Schema<CreateApiKeyResponse> = s.object<CreateApiKeyResponse>(
  {
    apiKey: s.optional(s.lazy(() => apiKeySchema)),
  },
  { additionalProperties: s.json() },
);
