import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationOptionsHealthCheckAuthenticationLoginSchema,
  type AuthenticationOptionsHealthCheckAuthenticationLogin,
} from "./authentication-options-health-check-authentication-login.js";
import {
  collectRequestParamConfRestCollectMethodGetSchema,
  type CollectRequestParamConfRestCollectMethodGet,
} from "./collect-request-param-conf-rest-collect-method-get.js";

export type RestAuthenticationLogin = {
  /** Discriminator value. */
  authentication?: AuthenticationOptionsHealthCheckAuthenticationLogin;
  /** URL to use for login API call. This call is expected to be a POST. */
  loginUrl: string;
  /** Login username */
  username: string;
  /** Login password */
  password: string;
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
   * Binds 'loginUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'loginUrl' at runtime.
   */
  templateLoginUrl?: string;
  /**
   * Binds 'username' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'username' at runtime.
   */
  templateUsername?: string;
  /**
   * Binds 'password' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'password' at runtime.
   */
  templatePassword?: string;
};

export const restAuthenticationLoginSchema: Schema<RestAuthenticationLogin> =
  s.object<RestAuthenticationLogin>({
    authentication: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationLoginSchema)),
    loginUrl: s.string(),
    username: s.string(),
    password: s.string(),
    loginBody: s.string(),
    getAuthTokenFromHeader: s.optional(s.boolean()),
    authHeaderKey: s.optional(s.string()),
    authHeaderExpr: s.string(),
    authRequestHeaders: s.optional(s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema))),
    tokenRespAttribute: s.optional(s.string()),
    templateLoginUrl: s.optional(s.string()),
    templateUsername: s.optional(s.string()),
    templatePassword: s.optional(s.string()),
    _keysMap: {
      templateLoginUrl: "__template_loginUrl",
      templateUsername: "__template_username",
      templatePassword: "__template_password",
    },
  });
