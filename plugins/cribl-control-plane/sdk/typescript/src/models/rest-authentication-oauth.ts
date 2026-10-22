import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationOptionsHealthCheckAuthenticationOauthSchema,
  type AuthenticationOptionsHealthCheckAuthenticationOauth,
} from "./authentication-options-health-check-authentication-oauth.js";
import {
  collectRequestParamConfRestCollectMethodGetSchema,
  type CollectRequestParamConfRestCollectMethodGet,
} from "./collect-request-param-conf-rest-collect-method-get.js";
import {
  refreshRequestParamConfHealthCheckAuthenticationOauthSchema,
  type RefreshRequestParamConfHealthCheckAuthenticationOauth,
} from "./refresh-request-param-conf-health-check-authentication-oauth.js";

export type RestAuthenticationOauth = {
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
   * Authorization header key to pass in Discover and Collect calls. Defaults to the literal name
   * 'Authorization'.
   */
  authHeaderKey?: string;
  /**
   * JavaScript expression to compute the Authorization header to pass in Discover and Collect
   * calls. The value ${token} is used to reference the token obtained from login.
   */
  authHeaderExpr: string;
  /**
   * Defaults to 'client_secret'. Automatically added to request parameters using the value
   * specified.
   */
  clientSecretParamName: string;
  /**
   * Secret value to add to HTTP requests as the 'client secret' parameter. Value is stored
   * encrypted on disk and automatically added to request parameters.
   */
  clientSecretParamValue: string;
  /**
   * OAuth request parameters added to the POST body. The Content-Type header will automatically be
   * set to application/x-www-form-urlencoded.
   */
  authRequestParams?: CollectRequestParamConfRestCollectMethodGet[];
  /** Authentication headers */
  authRequestHeaders?: CollectRequestParamConfRestCollectMethodGet[];
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
   * Binds 'clientSecretParamValue' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'clientSecretParamValue' at runtime.
   */
  templateClientSecretParamValue?: string;
  /**
   * Binds 'refreshUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'refreshUrl' at
   * runtime.
   */
  templateRefreshUrl?: string;
};

export const restAuthenticationOauthSchema: Schema<RestAuthenticationOauth> =
  s.object<RestAuthenticationOauth>({
    authentication: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationOauthSchema)),
    loginUrl: s.string(),
    tokenRespAttribute: s.optional(s.string()),
    authHeaderKey: s.optional(s.string()),
    authHeaderExpr: s.string(),
    clientSecretParamName: s.string(),
    clientSecretParamValue: s.string(),
    authRequestParams: s.optional(s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema))),
    authRequestHeaders: s.optional(s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema))),
    refreshTokenField: s.optional(s.string()),
    rotateRefreshToken: s.optional(s.boolean()),
    refreshUrl: s.optional(s.string()),
    refreshRequestParams: s.optional(
      s.array(s.lazy(() => refreshRequestParamConfHealthCheckAuthenticationOauthSchema)),
    ),
    templateLoginUrl: s.optional(s.string()),
    templateClientSecretParamValue: s.optional(s.string()),
    templateRefreshUrl: s.optional(s.string()),
    _keysMap: {
      templateLoginUrl: "__template_loginUrl",
      templateClientSecretParamValue: "__template_clientSecretParamValue",
      templateRefreshUrl: "__template_refreshUrl",
    },
  });
