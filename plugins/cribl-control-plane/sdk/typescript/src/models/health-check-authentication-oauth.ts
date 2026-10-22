import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authRequestHeaderConfHealthCheckAuthenticationOauthSchema,
  type AuthRequestHeaderConfHealthCheckAuthenticationOauth,
} from "./auth-request-header-conf-health-check-authentication-oauth.js";
import {
  authRequestParamConfHealthCheckAuthenticationOauthSchema,
  type AuthRequestParamConfHealthCheckAuthenticationOauth,
} from "./auth-request-param-conf-health-check-authentication-oauth.js";
import {
  authenticationOptionsHealthCheckAuthenticationOauthSchema,
  type AuthenticationOptionsHealthCheckAuthenticationOauth,
} from "./authentication-options-health-check-authentication-oauth.js";
import {
  refreshRequestParamConfHealthCheckAuthenticationOauthSchema,
  type RefreshRequestParamConfHealthCheckAuthenticationOauth,
} from "./refresh-request-param-conf-health-check-authentication-oauth.js";

export type HealthCheckAuthenticationOauth = {
  /** Discriminator value. */
  authentication?: AuthenticationOptionsHealthCheckAuthenticationOauth;
  /** URL to use for the OAuth API call. This call is expected to be a POST. */
  loginUrl: string;
  /**
   * Path to token attribute in login response body. Nested attributes are OK. Leave blank if the
   * response content type is text/plain; the entire response body will be used to derive the
   * authorization header.
   */
  tokenRespAttribute?: string;
  /**
   * JavaScript expression to compute the Authorization header to pass in discover and collect
   * calls. The value ${token} is used to reference the token obtained from login.
   */
  authHeaderExpr: string;
  /**
   * Parameter name that contains client secret. Defaults to 'client_secret', and is automatically
   * added to request parameters.
   */
  clientSecretParamName: string;
  /**
   * Secret value to add to HTTP requests as the 'client secret' parameter. Stored on disk
   * encrypted, and is automatically added to request parameters
   */
  clientSecretParamValue: string;
  /**
   * OAuth request parameters added to the POST body. The Content-Type header will automatically be
   * set to application/x-www-form-urlencoded.
   */
  authRequestParams?: AuthRequestParamConfHealthCheckAuthenticationOauth[];
  /** Optional authentication request headers. */
  authRequestHeaders?: AuthRequestHeaderConfHealthCheckAuthenticationOauth[];
  /**
   * Field name in the token response that contains a refresh token (example: 'refresh_token'). When
   * set, the Collector uses the refresh token to obtain new access tokens without re-sending
   * credentials.
   */
  refreshTokenField?: string;
  /**
   * The Collector will update its stored value on each successful refresh. Enable if the server
   * issues a new refresh token on every use.
   */
  rotateRefreshToken?: boolean;
  /** Override the refresh endpoint URL if it differs from the Login URL. Defaults to Login URL. */
  refreshUrl?: string;
  /**
   * Parameters to include in the refresh token request body. Most servers require 'client_id' here.
   * If not set, the Collector sends only grant_type, refresh_token, and client_secret.
   */
  refreshRequestParams?: RefreshRequestParamConfHealthCheckAuthenticationOauth[];
  /**
   * Binds 'loginUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'loginUrl' at runtime.
   */
  templateLoginUrl?: string;
  /**
   * Binds 'tokenRespAttribute' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'tokenRespAttribute' at runtime.
   */
  templateTokenRespAttribute?: string;
  /**
   * Binds 'refreshUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'refreshUrl' at
   * runtime.
   */
  templateRefreshUrl?: string;
};

export const healthCheckAuthenticationOauthSchema: Schema<HealthCheckAuthenticationOauth> =
  s.object<HealthCheckAuthenticationOauth>({
    authentication: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationOauthSchema)),
    loginUrl: s.string(),
    tokenRespAttribute: s.optional(s.string()),
    authHeaderExpr: s.string(),
    clientSecretParamName: s.string(),
    clientSecretParamValue: s.string(),
    authRequestParams: s.optional(
      s.array(s.lazy(() => authRequestParamConfHealthCheckAuthenticationOauthSchema)),
    ),
    authRequestHeaders: s.optional(
      s.array(s.lazy(() => authRequestHeaderConfHealthCheckAuthenticationOauthSchema)),
    ),
    refreshTokenField: s.optional(s.string()),
    rotateRefreshToken: s.optional(s.boolean()),
    refreshUrl: s.optional(s.string()),
    refreshRequestParams: s.optional(
      s.array(s.lazy(() => refreshRequestParamConfHealthCheckAuthenticationOauthSchema)),
    ),
    templateLoginUrl: s.optional(s.string()),
    templateTokenRespAttribute: s.optional(s.string()),
    templateRefreshUrl: s.optional(s.string()),
    _keysMap: {
      templateLoginUrl: "__template_loginUrl",
      templateTokenRespAttribute: "__template_tokenRespAttribute",
      templateRefreshUrl: "__template_refreshUrl",
    },
  });
