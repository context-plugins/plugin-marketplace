import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * OAuth 2.0 Token Response (RFC 6749 Section 5.1). Contains the access token and optional
 * refresh/ID tokens.
 */
export type OAuthTokenResponse = {
  /** The access token for API requests */
  accessToken?: string;
  /** Token type (always "Bearer") */
  tokenType?: string;
  /** Access token lifetime in seconds */
  expiresIn?: number;
  /** Refresh token for obtaining new access tokens */
  refreshToken?: string;
  /** Granted scopes (may differ from requested) */
  scope?: string;
  /** OpenID Connect ID token (JWT) if openid scope was requested */
  idToken?: string;
  /**
   * The type of the issued token (RFC 8693 Section 2.2.1). Returned by the token-exchange grant,
   * where it is always `urn:ietf:params:oauth:token-type:access_token`.
   */
  issuedTokenType?: string;
};

export const oAuthTokenResponseSchema: Schema<OAuthTokenResponse> = s.object<OAuthTokenResponse>({
  accessToken: s.optional(s.string()),
  tokenType: s.optional(s.string()),
  expiresIn: s.optional(s.int()),
  refreshToken: s.optional(s.string()),
  scope: s.optional(s.string()),
  idToken: s.optional(s.string()),
  issuedTokenType: s.optional(s.string()),
  _keysMap: {
    accessToken: "access_token",
    tokenType: "token_type",
    expiresIn: "expires_in",
    refreshToken: "refresh_token",
    idToken: "id_token",
    issuedTokenType: "issued_token_type",
  },
});
