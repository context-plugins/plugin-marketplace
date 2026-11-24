import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The error response related OAuth tokens */
export type OAuthError = {
  /** Specifies the OAuth error code string when the request for a token fails. */
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oAuthErrorSchema: Schema<OAuthError> = s.object<OAuthError>(
  {
    error: s.string(),
  },
  { additionalProperties: s.json() },
);
