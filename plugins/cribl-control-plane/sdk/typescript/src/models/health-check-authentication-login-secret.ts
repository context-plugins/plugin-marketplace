import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authRequestHeaderConfHealthCheckAuthenticationLoginSchema,
  type AuthRequestHeaderConfHealthCheckAuthenticationLogin,
} from "./auth-request-header-conf-health-check-authentication-login.js";
import {
  authenticationOptionsHealthCheckAuthenticationLoginSecretSchema,
  type AuthenticationOptionsHealthCheckAuthenticationLoginSecret,
} from "./authentication-options-health-check-authentication-login-secret.js";

export type HealthCheckAuthenticationLoginSecret = {
  /** Discriminator value. */
  authentication?: AuthenticationOptionsHealthCheckAuthenticationLoginSecret;
  /** URL to use for login API call, this call is expected to be a POST. */
  loginUrl: string;
  /** Select or create a stored secret that references your login credentials */
  credentialsSecret: string;
  /**
   * Template for POST body to send with login request, ${username} and ${password} are used to
   * specify location of these attributes in the message
   */
  loginBody: string;
  /**
   * Path to token attribute in login response body. Nested attributes are OK. If left blank, the
   * entire response body will be used to derive the authorization header.
   */
  tokenRespAttribute?: string;
  /**
   * JavaScript expression to compute the Authorization header to pass in discover and collect
   * calls. The value ${token} is used to reference the token obtained from login.
   */
  authHeaderExpr: string;
  /** Optional authentication request headers. */
  authRequestHeaders?: AuthRequestHeaderConfHealthCheckAuthenticationLogin[];
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
};

export const healthCheckAuthenticationLoginSecretSchema: Schema<HealthCheckAuthenticationLoginSecret> =
  s.object<HealthCheckAuthenticationLoginSecret>({
    authentication: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationLoginSecretSchema)),
    loginUrl: s.string(),
    credentialsSecret: s.string(),
    loginBody: s.string(),
    tokenRespAttribute: s.optional(s.string()),
    authHeaderExpr: s.string(),
    authRequestHeaders: s.optional(
      s.array(s.lazy(() => authRequestHeaderConfHealthCheckAuthenticationLoginSchema)),
    ),
    templateLoginUrl: s.optional(s.string()),
    templateTokenRespAttribute: s.optional(s.string()),
    _keysMap: {
      templateLoginUrl: "__template_loginUrl",
      templateTokenRespAttribute: "__template_tokenRespAttribute",
    },
  });
