import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationOptionsHealthCheckAuthenticationBasicSchema,
  type AuthenticationOptionsHealthCheckAuthenticationBasic,
} from "./authentication-options-health-check-authentication-basic.js";

export type HealthCheckAuthenticationBasic = {
  /** Discriminator value. */
  authentication?: AuthenticationOptionsHealthCheckAuthenticationBasic;
  /** Basic authentication username */
  username: string;
  /** Basic authentication password */
  password: string;
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

export const healthCheckAuthenticationBasicSchema: Schema<HealthCheckAuthenticationBasic> =
  s.object<HealthCheckAuthenticationBasic>({
    authentication: s.optional(s.lazy(() => authenticationOptionsHealthCheckAuthenticationBasicSchema)),
    username: s.string(),
    password: s.string(),
    templateUsername: s.optional(s.string()),
    templatePassword: s.optional(s.string()),
    _keysMap: {
      templateUsername: "__template_username",
      templatePassword: "__template_password",
    },
  });
