import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const AuthenticationOptionsHealthCheckAuthenticationBasicSecret = {
  BasicSecret: "basicSecret",
} as const;
export type AuthenticationOptionsHealthCheckAuthenticationBasicSecret =
  | (typeof AuthenticationOptionsHealthCheckAuthenticationBasicSecret)[keyof typeof AuthenticationOptionsHealthCheckAuthenticationBasicSecret]
  | (string & {});

export const authenticationOptionsHealthCheckAuthenticationBasicSecretSchema: EnumSchema<AuthenticationOptionsHealthCheckAuthenticationBasicSecret> =
  s.enumOf<AuthenticationOptionsHealthCheckAuthenticationBasicSecret>(
    AuthenticationOptionsHealthCheckAuthenticationBasicSecret,
  );
