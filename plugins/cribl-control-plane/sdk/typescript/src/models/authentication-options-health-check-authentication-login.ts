import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const AuthenticationOptionsHealthCheckAuthenticationLogin = {
  Login: "login",
} as const;
export type AuthenticationOptionsHealthCheckAuthenticationLogin =
  | (typeof AuthenticationOptionsHealthCheckAuthenticationLogin)[keyof typeof AuthenticationOptionsHealthCheckAuthenticationLogin]
  | (string & {});

export const authenticationOptionsHealthCheckAuthenticationLoginSchema: EnumSchema<AuthenticationOptionsHealthCheckAuthenticationLogin> =
  s.enumOf<AuthenticationOptionsHealthCheckAuthenticationLogin>(
    AuthenticationOptionsHealthCheckAuthenticationLogin,
  );
