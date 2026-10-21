import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const AuthenticationOptionsHealthCheckAuthenticationLoginSecret = {
  LoginSecret: "loginSecret",
} as const;
export type AuthenticationOptionsHealthCheckAuthenticationLoginSecret =
  | (typeof AuthenticationOptionsHealthCheckAuthenticationLoginSecret)[keyof typeof AuthenticationOptionsHealthCheckAuthenticationLoginSecret]
  | (string & {});

export const authenticationOptionsHealthCheckAuthenticationLoginSecretSchema: EnumSchema<AuthenticationOptionsHealthCheckAuthenticationLoginSecret> =
  s.enumOf<AuthenticationOptionsHealthCheckAuthenticationLoginSecret>(
    AuthenticationOptionsHealthCheckAuthenticationLoginSecret,
  );
