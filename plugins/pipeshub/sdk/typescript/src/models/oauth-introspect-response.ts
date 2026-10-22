import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * OAuth 2.0 Token Introspection Response (RFC 7662). Contains token metadata if active, or just
 * `active: false` if not.
 */
export type OAuthIntrospectResponse = {
  /** Whether the token is currently active */
  active: boolean;
  /** Scopes granted to the token */
  scope?: string;
  /** Client ID the token was issued to */
  clientId?: string;
  /** User identifier (if user-based token) */
  username?: string;
  /** Token type */
  tokenType?: string;
  /** Token expiration timestamp (Unix epoch) */
  exp?: number;
  /** Token issuance timestamp (Unix epoch) */
  iat?: number;
  /** Token not-before timestamp (Unix epoch) */
  nbf?: number;
  /** User ID */
  userId?: string;
  /** Audience (client ID) */
  aud?: string;
  /** Issuer URL */
  iss?: string;
  /** Unique token identifier */
  jti?: string;
};

export const oAuthIntrospectResponseSchema: Schema<OAuthIntrospectResponse> =
  s.object<OAuthIntrospectResponse>({
    active: s.boolean(),
    scope: s.optional(s.string()),
    clientId: s.optional(s.string()),
    username: s.optional(s.string()),
    tokenType: s.optional(s.string()),
    exp: s.optional(s.int()),
    iat: s.optional(s.int()),
    nbf: s.optional(s.int()),
    userId: s.optional(s.string()),
    aud: s.optional(s.string()),
    iss: s.optional(s.string()),
    jti: s.optional(s.string()),
    _keysMap: {
      clientId: "client_id",
      tokenType: "token_type",
      userId: "user_id",
    },
  });
