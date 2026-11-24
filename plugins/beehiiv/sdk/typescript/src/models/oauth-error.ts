import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard OAuth2 error response. */
export type OAuthError = {
  error: string;
  errorDescription?: string;
  errorUri?: string;
  state?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oAuthErrorSchema: Schema<OAuthError> = s.object<OAuthError>(
  {
    error: s.string(),
    errorDescription: s.optional(s.string()),
    errorUri: s.optional(s.string()),
    state: s.optional(s.string()),
    _keysMap: {
      errorDescription: "error_description",
      errorUri: "error_uri",
    },
  },
  { additionalProperties: s.json() },
);
