import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { grantType1Schema, type GrantType1 } from "./grant-type1.js";

export type OauthTokenRequest = {
  /** authorization_code or refresh_token. */
  grantType: GrantType1;
  /** Authorization code returned from /oauth/authorize. */
  code?: string;
  /** Must match the redirect URI used in the authorization request. */
  redirectUri?: string;
  /** OAuth application client ID (uid). */
  clientId?: string;
  /** Required for confidential clients. */
  clientSecret?: string;
  /** Refresh token returned from a previous token exchange. */
  refreshToken?: string;
  /** PKCE code verifier. Required for public clients. */
  codeVerifier?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oauthTokenRequestSchema: Schema<OauthTokenRequest> = s.object<OauthTokenRequest>(
  {
    grantType: grantType1Schema,
    code: s.optional(s.string()),
    redirectUri: s.optional(s.string()),
    clientId: s.optional(s.string()),
    clientSecret: s.optional(s.string()),
    refreshToken: s.optional(s.string()),
    codeVerifier: s.optional(s.string()),
    _keysMap: {
      grantType: "grant_type",
      redirectUri: "redirect_uri",
      clientId: "client_id",
      clientSecret: "client_secret",
      refreshToken: "refresh_token",
      codeVerifier: "code_verifier",
    },
  },
  { additionalProperties: s.json() },
);
