import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AuthorizationResponse = {
  /** The generated token to use in API v4 enrichment requests */
  token?: string;
  /** Value to use in refresh token requests */
  refreshToken?: string;
  /** Epoch seconds of the expiration moment */
  expiration?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authorizationResponseSchema: Schema<AuthorizationResponse> = s.object<AuthorizationResponse>(
  {
    token: s.optional(s.string()),
    refreshToken: s.optional(s.string()),
    expiration: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
