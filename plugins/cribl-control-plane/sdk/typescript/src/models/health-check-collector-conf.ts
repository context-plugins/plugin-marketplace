import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authRequestHeaderConfHealthCheckAuthenticationLoginSchema,
  type AuthRequestHeaderConfHealthCheckAuthenticationLogin,
} from "./auth-request-header-conf-health-check-authentication-login.js";
import {
  authRequestParamConfHealthCheckAuthenticationOauthSchema,
  type AuthRequestParamConfHealthCheckAuthenticationOauth,
} from "./auth-request-param-conf-health-check-authentication-oauth.js";
import { authentication1Schema, type Authentication1 } from "./authentication1.js";
import { discoverySchema, type Discovery } from "./discovery.js";
import { healthCheckHeaderSchema, type HealthCheckHeader } from "./health-check-header.js";
import { healthCheckMethodSchema, type HealthCheckMethod } from "./health-check-method.js";
import { hiddenDefaultBreakersSchema, type HiddenDefaultBreakers } from "./hidden-default-breakers.js";
import {
  refreshRequestParamConfHealthCheckAuthenticationOauthSchema,
  type RefreshRequestParamConfHealthCheckAuthenticationOauth,
} from "./refresh-request-param-conf-health-check-authentication-oauth.js";
import { retryRulesSchema, type RetryRules } from "./retry-rules.js";

export type HealthCheckCollectorConf = {
  /** Settings that control how the Collector discovers Collect tasks. */
  discovery?: Discovery;
  /** Expression to derive URL to use for the health check operation (can be a constant). */
  collectUrl: string;
  /** Health check HTTP method. */
  collectMethod: HealthCheckMethod;
  /** Optional health check request headers. */
  collectRequestHeaders?: HealthCheckHeader[];
  /** Enable to make auth health check call. */
  authenticateCollect?: boolean;
  /**
   * Authentication method for Discover and Collect REST calls. You can specify API Key–based
   * authentication by adding the appropriate Collect headers.
   */
  authentication: Authentication1;
  /** HTTP request inactivity timeout, use 0 to disable */
  timeout?: number;
  /**
   * Whether to reject certificates that cannot be verified against a valid CA (e.g., self-signed
   * certificates).
   */
  rejectUnauthorized?: boolean;
  /** Hidden Default Breakers */
  defaultBreakers?: HiddenDefaultBreakers;
  /** List of headers that are safe to log in plain text. */
  safeHeaders?: string[];
  /** Settings that control how the Collector retries failed HTTP requests. */
  retryRules?: RetryRules;
  /** Basic authentication username */
  username?: string;
  /**
   * Binds 'username' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'username' at runtime.
   */
  templateUsername?: string;
  /** Basic authentication password */
  password?: string;
  /**
   * Binds 'password' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'password' at runtime.
   */
  templatePassword?: string;
  /** Select or create a stored secret that references your credentials */
  credentialsSecret?: string;
  /** URL to use for login API call. This call is expected to be a POST. */
  loginUrl?: string;
  /**
   * Binds 'loginUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'loginUrl' at runtime.
   */
  templateLoginUrl?: string;
  /**
   * Template for POST body to send with login request, ${username} and ${password} are used to
   * specify location of these attributes in the message
   */
  loginBody?: string;
  /**
   * Path to token attribute in login response body. Nested attributes are OK. Leave blank if the
   * response content type is text/plain; the entire response body will be used to derive the
   * authorization header.
   */
  tokenRespAttribute?: string;
  /**
   * Binds 'tokenRespAttribute' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'tokenRespAttribute' at runtime.
   */
  templateTokenRespAttribute?: string;
  /**
   * JavaScript expression to compute the Authorization header to pass in discover and collect
   * calls. The value ${token} is used to reference the token obtained from login.
   */
  authHeaderExpr?: string;
  /** Optional authentication request headers. */
  authRequestHeaders?: AuthRequestHeaderConfHealthCheckAuthenticationLogin[];
  /**
   * Parameter name that contains client secret. Defaults to 'client_secret', and is automatically
   * added to request parameters.
   */
  clientSecretParamName?: string;
  /**
   * Secret value to add to HTTP requests as the 'client secret' parameter. Stored on disk
   * encrypted, and is automatically added to request parameters
   */
  clientSecretParamValue?: string;
  /**
   * OAuth request parameters added to the POST body. The Content-Type header will automatically be
   * set to application/x-www-form-urlencoded.
   */
  authRequestParams?: AuthRequestParamConfHealthCheckAuthenticationOauth[];
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
   * Binds 'refreshUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'refreshUrl' at
   * runtime.
   */
  templateRefreshUrl?: string;
  /**
   * Parameters to include in the refresh token request body. Most servers require 'client_id' here.
   * If not set, the Collector sends only grant_type, refresh_token, and client_secret.
   */
  refreshRequestParams?: RefreshRequestParamConfHealthCheckAuthenticationOauth[];
  /** Select or create a text secret that contains the client secret's value. */
  textSecret?: string;
  /**
   * Binds 'collectUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'collectUrl' at
   * runtime.
   */
  templateCollectUrl?: string;
};

export const healthCheckCollectorConfSchema: Schema<HealthCheckCollectorConf> =
  s.object<HealthCheckCollectorConf>({
    discovery: s.optional(s.lazy(() => discoverySchema)),
    collectUrl: s.string(),
    collectMethod: healthCheckMethodSchema,
    collectRequestHeaders: s.optional(s.array(s.lazy(() => healthCheckHeaderSchema))),
    authenticateCollect: s.optional(s.boolean()),
    authentication: authentication1Schema,
    timeout: s.optional(s.float64()),
    rejectUnauthorized: s.optional(s.boolean()),
    defaultBreakers: s.optional(s.lazy(() => hiddenDefaultBreakersSchema)),
    safeHeaders: s.optional(s.array(s.string())),
    retryRules: s.optional(s.lazy(() => retryRulesSchema)),
    username: s.optional(s.string()),
    templateUsername: s.optional(s.string()),
    password: s.optional(s.string()),
    templatePassword: s.optional(s.string()),
    credentialsSecret: s.optional(s.string()),
    loginUrl: s.optional(s.string()),
    templateLoginUrl: s.optional(s.string()),
    loginBody: s.optional(s.string()),
    tokenRespAttribute: s.optional(s.string()),
    templateTokenRespAttribute: s.optional(s.string()),
    authHeaderExpr: s.optional(s.string()),
    authRequestHeaders: s.optional(
      s.array(s.lazy(() => authRequestHeaderConfHealthCheckAuthenticationLoginSchema)),
    ),
    clientSecretParamName: s.optional(s.string()),
    clientSecretParamValue: s.optional(s.string()),
    authRequestParams: s.optional(
      s.array(s.lazy(() => authRequestParamConfHealthCheckAuthenticationOauthSchema)),
    ),
    refreshTokenField: s.optional(s.string()),
    rotateRefreshToken: s.optional(s.boolean()),
    refreshUrl: s.optional(s.string()),
    templateRefreshUrl: s.optional(s.string()),
    refreshRequestParams: s.optional(
      s.array(s.lazy(() => refreshRequestParamConfHealthCheckAuthenticationOauthSchema)),
    ),
    textSecret: s.optional(s.string()),
    templateCollectUrl: s.optional(s.string()),
    _keysMap: {
      templateUsername: "__template_username",
      templatePassword: "__template_password",
      templateLoginUrl: "__template_loginUrl",
      templateTokenRespAttribute: "__template_tokenRespAttribute",
      templateRefreshUrl: "__template_refreshUrl",
      templateCollectUrl: "__template_collectUrl",
    },
  });
