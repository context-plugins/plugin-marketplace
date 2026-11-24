import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValidateBatchRequest = {
  /** The user's ZeroBounce API key. */
  apiKey: string;
  /** A string representing a comma-separated list of emails to validate. */
  emails?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validateBatchRequestSchema: Schema<ValidateBatchRequest> = s.object<ValidateBatchRequest>(
  {
    apiKey: s.string(),
    emails: s.optional(s.string()),
    _keysMap: {
      apiKey: "api_key",
    },
  },
  { additionalProperties: s.json() },
);
