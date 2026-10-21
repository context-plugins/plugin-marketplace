import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { grantTypeSchema, type GrantType } from "./grant-type.js";

/**
 * OAuth 2.0 Token Request (RFC 6749 Section 4.1.3). Request body for exchanging authorization code
 * or credentials for tokens.
 */
export type OAuthTokenRequest = {
  /**
   * OAuth grant type:
   * - `authorization_code`: Exchange auth code for tokens
   * - `client_credentials`: Machine-to-machine auth
   * - `refresh_token`: Get new access token using refresh token
   * - `urn:ietf:params:oauth:grant-type:token-exchange`: Service-account delegation (RFC 8693).
   *   Exchanges a service token for a short-lived token that acts as one named person. Enterprise
   *   edition; kept in this enum because the request shape is the same wherever the grant is
   *   offered.
   */
  grantType: GrantType;
  /** Authorization code (required for authorization_code grant) */
  code?: string;
  /** Redirect URI (required for authorization_code grant) */
  redirectUri?: string;
  /** Client ID (can also be sent via Basic auth header) */
  clientId?: string;
  /** Client secret (can also be sent via Basic auth header) */
  clientSecret?: string;
  /** Refresh token (required for refresh_token grant) */
  refreshToken?: string;
  /** Requested scopes (optional, defaults to original grant scopes) */
  scope?: string;
  /**
   * PKCE code verifier (RFC 7636). Required if code_challenge was used. Must be 43-128 characters
   * from [A-Za-z0-9-._~]
   */
  codeVerifier?: string;
  /**
   * The service token being exchanged (token-exchange grant only). This is the only authentication
   * the grant has: no `client_id` or `client_secret` is sent, because the service token already
   * carries a verified identity and the scopes that bound it.
   */
  subjectToken?: string;
  /**
   * Optional. Must be `urn:ietf:params:oauth:token-type:access_token` when sent (token-exchange
   * grant only).
   */
  subjectTokenType?: string;
  /**
   * The person to act as, by user id or email address (token-exchange grant only). Must be on the
   * service account's allow-list, and must not be an administrator.
   */
  requestedSubject?: string;
};

export const oAuthTokenRequestSchema: Schema<OAuthTokenRequest> = s.object<OAuthTokenRequest>({
  grantType: grantTypeSchema,
  code: s.optional(s.string()),
  redirectUri: s.optional(s.string()),
  clientId: s.optional(s.string()),
  clientSecret: s.optional(s.string()),
  refreshToken: s.optional(s.string()),
  scope: s.optional(s.string()),
  codeVerifier: s.optional(s.string()),
  subjectToken: s.optional(s.string()),
  subjectTokenType: s.optional(s.string()),
  requestedSubject: s.optional(s.string()),
  _keysMap: {
    grantType: "grant_type",
    redirectUri: "redirect_uri",
    clientId: "client_id",
    clientSecret: "client_secret",
    refreshToken: "refresh_token",
    codeVerifier: "code_verifier",
    subjectToken: "subject_token",
    subjectTokenType: "subject_token_type",
    requestedSubject: "requested_subject",
  },
});
