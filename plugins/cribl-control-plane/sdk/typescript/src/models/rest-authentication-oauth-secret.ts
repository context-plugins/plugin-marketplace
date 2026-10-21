import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationOptionsHealthCheckAuthenticationOauthSecretSchema,
  type AuthenticationOptionsHealthCheckAuthenticationOauthSecret,
} from "./authentication-options-health-check-authentication-oauth-secret.js";
import {
  collectRequestParamConfRestCollectMethodGetSchema,
  type CollectRequestParamConfRestCollectMethodGet,
} from "./collect-request-param-conf-rest-collect-method-get.js";
import {
  refreshRequestParamConfHealthCheckAuthenticationOauthSecretSchema,
  type RefreshRequestParamConfHealthCheckAuthenticationOauthSecret,
} from "./refresh-request-param-conf-health-check-authentication-oauth-secret.js";

export type RestAuthenticationOauthSecret = {
  /** Discriminator value. */
  authentication?: AuthenticationOptionsHealthCheckAuthenticationOauthSecret;
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
  /** Select or create a text secret that contains the client secret's value */
  textSecret: string;
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
  refreshRequestParams?: RefreshRequestParamConfHealthCheckAuthenticationOauthSecret[];
  /**
   * Binds 'refreshUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'refreshUrl' at
   * runtime.
   */
  templateRefreshUrl?: string;
};

export const restAuthenticationOauthSecretSchema: Schema<RestAuthenticationOauthSecret> =
  s.object<RestAuthenticationOauthSecret>({
    authentication: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationOauthSecretSchema)),
    loginUrl: s.string(),
    tokenRespAttribute: s.optional(s.string()),
    authHeaderKey: s.optional(s.string()),
    authHeaderExpr: s.string(),
    clientSecretParamName: s.string(),
    textSecret: s.string(),
    authRequestParams: s.optional(s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema))),
    authRequestHeaders: s.optional(s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema))),
    refreshTokenField: s.optional(s.string()),
    rotateRefreshToken: s.optional(s.boolean()),
    refreshUrl: s.optional(s.string()),
    refreshRequestParams: s.optional(
      s.array(s.lazy(() => refreshRequestParamConfHealthCheckAuthenticationOauthSecretSchema)),
    ),
    templateRefreshUrl: s.optional(s.string()),
    _keysMap: {
      templateRefreshUrl: "__template_refreshUrl",
    },
  });
