import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValidateEmailRequest = {
  /**
   * The user's ZeroBounce API key. Optional. The user can perform up to 3 requests per day without
   * providing this API key.
   */
  apiKey?: string;
  /** The email you want to validate. */
  email: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validateEmailRequestSchema: Schema<ValidateEmailRequest> = s.object<ValidateEmailRequest>(
  {
    apiKey: s.optional(s.string()),
    email: s.string(),
    _keysMap: {
      apiKey: "api_key",
    },
  },
  { additionalProperties: s.json() },
);
