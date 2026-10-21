import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationOptionsHealthCheckAuthenticationLoginSecretSchema,
  type AuthenticationOptionsHealthCheckAuthenticationLoginSecret,
} from "./authentication-options-health-check-authentication-login-secret.js";
import {
  collectRequestParamConfRestCollectMethodGetSchema,
  type CollectRequestParamConfRestCollectMethodGet,
} from "./collect-request-param-conf-rest-collect-method-get.js";

export type RestAuthenticationLoginSecret = {
  /** Discriminator value. */
  authentication?: AuthenticationOptionsHealthCheckAuthenticationLoginSecret;
  /** URL to use for login API call. This call is expected to be a POST. */
  loginUrl: string;
  /** Select or create a stored secret that references your login credentials */
  credentialsSecret: string;
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
   * JavaScript expression to compute the Authorization header to pass in Discover and Collect
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
};

export const restAuthenticationLoginSecretSchema: Schema<RestAuthenticationLoginSecret> =
  s.object<RestAuthenticationLoginSecret>({
    authentication: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationLoginSecretSchema)),
    loginUrl: s.string(),
    credentialsSecret: s.string(),
    loginBody: s.string(),
    getAuthTokenFromHeader: s.optional(s.boolean()),
    authHeaderKey: s.optional(s.string()),
    authHeaderExpr: s.string(),
    authRequestHeaders: s.optional(s.array(s.lazy(() => collectRequestParamConfRestCollectMethodGetSchema))),
    tokenRespAttribute: s.optional(s.string()),
  });
