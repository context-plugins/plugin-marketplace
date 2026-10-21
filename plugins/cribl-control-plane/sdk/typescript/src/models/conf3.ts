import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authentication5Schema, type Authentication5 } from "./authentication5.js";
import { collectMethodSchema, type CollectMethod } from "./collect-method.js";
import {
  collectRequestParamConfRestCollectMethodGetSchema,
  type CollectRequestParamConfRestCollectMethodGet,
} from "./collect-request-param-conf-rest-collect-method-get.js";
import { discovery1Schema, type Discovery1 } from "./discovery1.js";
import { microsoftGraphDeltaSchema, type MicrosoftGraphDelta } from "./microsoft-graph-delta.js";
import { pagination1Schema, type Pagination1 } from "./pagination1.js";
import {
  refreshRequestParamConfHealthCheckAuthenticationOauthSchema,
  type RefreshRequestParamConfHealthCheckAuthenticationOauth,
} from "./refresh-request-param-conf-health-check-authentication-oauth.js";
import { retryRulesSchema, type RetryRules } from "./retry-rules.js";
import { scheduling1Schema, type Scheduling1 } from "./scheduling1.js";

/** Collector configuration */
export type Conf3 = {
  /** Settings that control how the Collector discovers Collect tasks. */
  discovery?: Discovery1;
  /** URL (constant or JavaScript expression) to use for the Collect operation */
  collectUrl: string;
  /** Collect method */
  collectMethod: CollectMethod;
  /** Headers to send with each Collect request. */
  collectRequestHeaders?: CollectRequestParamConfRestCollectMethodGet[];
  /** Settings that control how the Collector paginates through Collect results. */
  pagination?: Pagination1;
  /**
   * Authentication method for Discover and Collect REST calls. You can specify API key–based
   * authentication by adding the appropriate Collect headers.
   */
  authentication: Authentication5;
  /** HTTP request inactivity timeout. Use 0 to disable. */
  timeout?: number;
  /**
   * Maximum amount of data to buffer from a single response body. Responses exceeding this limit
   * will be rejected. Maximum allowed value is 512 MB. Leave unset to rely on default error
   * handling.
   */
  maxResponseBodySize?: string;
  /**
   * Use round-robin DNS lookup. Suitable when DNS server returns multiple addresses in sort order.
   */
  useRoundRobinDns?: boolean;
  /** Disable Collector event time filtering when a date range is specified */
  disableTimeFilter?: boolean;
  /** Decode the URL before sending requests (including pagination requests) */
  decodeUrl?: boolean;
  /**
   * Reject certificates that cannot be verified against a valid CA (such as self-signed
   * certificates)
   */
  rejectUnauthorized?: boolean;
  /** Enable to add response headers to the resHeaders field under the __collectible object */
  captureHeaders?: boolean;
  /** Stop pagination when the Event Breaker produces no events */
  stopOnEmptyResults?: boolean;
  /** List of headers that are safe to log in plain text */
  safeHeaders?: string[];
  /** Settings that control how the Collector retries failed HTTP requests. */
  retryRules?: RetryRules;
  /**
   * Internal opt-in for the Microsoft Graph deltaLink state-tracking hook. Set programmatically by
   * the Microsoft Graph source when the configured URL targets a /delta endpoint; not
   * user-configurable.
   */
  microsoftGraphDelta?: MicrosoftGraphDelta;
  /** Internal settings for scheduled execution of this Collector. */
  scheduling?: Scheduling1;
  /** Username */
  username: string;
  /**
   * Binds 'username' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'username' at runtime.
   */
  templateUsername?: string;
  /** Password */
  password: string;
  /**
   * Binds 'password' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'password' at runtime.
   */
  templatePassword?: string;
  /** Select or create a stored secret that references your credentials */
  credentialsSecret: string;
  /** URL to use for login API call. This call is expected to be a POST. */
  loginUrl: string;
  /**
   * Binds 'loginUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'loginUrl' at runtime.
   */
  templateLoginUrl?: string;
  /**
   * Template for POST body to send with login request. ${username} and ${password} are used to
   * specify location of these attributes in the message. For x-www-form-urlencoded bodies, wrap
   * values with ${C.Encode.uri(password)} to preserve special characters like +, &, and =.
   */
  loginBody: string;
  /**
   * Extract the auth token from the HTTP 'Authorization' response header instead of the standard
   * JSON body of the login response
   */
  getAuthTokenFromHeader?: boolean;
  /**
   * Authorization header key to pass in Discover and Collect calls. Defaults to the literal name
   * 'Authorization'.
   */
  authHeaderKey?: string;
  /**
   * JavaScript expression used to compute the Authorization header to pass in Discover and Collect
   * calls. The value ${token} is used to reference the token obtained from login.
   */
  authHeaderExpr: string;
  /** Authentication headers */
  authRequestHeaders?: CollectRequestParamConfRestCollectMethodGet[];
  /**
   * Path to token attribute in login response body. Nested attributes are OK. Leave blank if the
   * response content type is text/plain; the entire response body will be used to derive the
   * authorization header.
   */
  tokenRespAttribute?: string;
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
   * Binds 'clientSecretParamValue' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'clientSecretParamValue' at runtime.
   */
  templateClientSecretParamValue?: string;
  /**
   * OAuth request parameters added to the POST body. The Content-Type header will automatically be
   * set to application/x-www-form-urlencoded.
   */
  authRequestParams?: CollectRequestParamConfRestCollectMethodGet[];
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
  /** Select or create a text secret that contains the client secret's value */
  textSecret: string;
  /**
   * Scopes to use during authentication. See [Google's
   * docs](https://developers.google.com/identity/protocols/oauth2/scopes) for more information.
   */
  scopes: string[];
  /**
   * Contents of Google Cloud service account credentials (JSON keys) file. To upload a file, click
   * the upload icon in this field's upper right.
   */
  serviceAccountCredentials: string;
  /**
   * Binds 'serviceAccountCredentials' to a variable for dynamic value resolution. Set to variable
   * ID (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'serviceAccountCredentials' at runtime.
   */
  templateServiceAccountCredentials?: string;
  /**
   * Email address of a user account with Super Admin permissions to the resources the collector
   * will retrieve
   */
  subject: string;
  /**
   * Binds 'subject' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'subject' at runtime.
   */
  templateSubject?: string;
  /** Select or create an HMAC Function to use with authentication */
  hmacFunctionId: string;
  /**
   * Binds 'collectUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'collectUrl' at
   * runtime.
   */
  templateCollectUrl?: string;
  /** Collect parameters */
  collectRequestParams?: CollectRequestParamConfRestCollectMethodGet[];
  /**
   * Template for POST body to send with the Collect request. Reference global variables, functions,
   * or parameters from the Discover response using template params: `${C.vars.myVar}`, or
   * `${Date.now()}`, `${param}`
   */
  collectBody: string;
  /** Custom HTTP method to use for the Collect operation */
  collectVerb: string;
};

export const conf3Schema: Schema<Conf3> = s.object<Conf3>({
  discovery: s.optional(s.lazy(() => discovery1Schema)),
  collectUrl: s.string(),
  collectMethod: collectMethodSchema,
  collectRequestHeaders: s.optional(s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema))),
  pagination: s.optional(s.lazy(() => pagination1Schema)),
  authentication: authentication5Schema,
  timeout: s.optional(s.float64()),
  maxResponseBodySize: s.optional(s.string()),
  useRoundRobinDns: s.optional(s.boolean()),
  disableTimeFilter: s.optional(s.boolean()),
  decodeUrl: s.optional(s.boolean()),
  rejectUnauthorized: s.optional(s.boolean()),
  captureHeaders: s.optional(s.boolean()),
  stopOnEmptyResults: s.optional(s.boolean()),
  safeHeaders: s.optional(s.array(s.string())),
  retryRules: s.optional(s.lazy(() => retryRulesSchema)),
  microsoftGraphDelta: s.optional(s.lazy(() => microsoftGraphDeltaSchema)),
  scheduling: s.optional(s.lazy(() => scheduling1Schema)),
  username: s.string(),
  templateUsername: s.optional(s.string()),
  password: s.string(),
  templatePassword: s.optional(s.string()),
  credentialsSecret: s.string(),
  loginUrl: s.string(),
  templateLoginUrl: s.optional(s.string()),
  loginBody: s.string(),
  getAuthTokenFromHeader: s.optional(s.boolean()),
  authHeaderKey: s.optional(s.string()),
  authHeaderExpr: s.string(),
  authRequestHeaders: s.optional(s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema))),
  tokenRespAttribute: s.optional(s.string()),
  clientSecretParamName: s.string(),
  clientSecretParamValue: s.string(),
  templateClientSecretParamValue: s.optional(s.string()),
  authRequestParams: s.optional(s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema))),
  refreshTokenField: s.optional(s.string()),
  rotateRefreshToken: s.optional(s.boolean()),
  refreshUrl: s.optional(s.string()),
  templateRefreshUrl: s.optional(s.string()),
  refreshRequestParams: s.optional(
    s.array(s.lazy(() => refreshRequestParamConfHealthCheckAuthenticationOauthSchema)),
  ),
  textSecret: s.string(),
  scopes: s.array(s.string()),
  serviceAccountCredentials: s.string(),
  templateServiceAccountCredentials: s.optional(s.string()),
  subject: s.string(),
  templateSubject: s.optional(s.string()),
  hmacFunctionId: s.string(),
  templateCollectUrl: s.optional(s.string()),
  collectRequestParams: s.optional(s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema))),
  collectBody: s.string(),
  collectVerb: s.string(),
  _keysMap: {
    scheduling: "__scheduling",
    templateUsername: "__template_username",
    templatePassword: "__template_password",
    templateLoginUrl: "__template_loginUrl",
    templateClientSecretParamValue: "__template_clientSecretParamValue",
    templateRefreshUrl: "__template_refreshUrl",
    templateServiceAccountCredentials: "__template_serviceAccountCredentials",
    templateSubject: "__template_subject",
    templateCollectUrl: "__template_collectUrl",
  },
});
