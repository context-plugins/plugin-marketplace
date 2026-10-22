import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const AuthenticationOptionsHealthCheckAuthenticationBasic = {
  Basic: "basic",
} as const;
export type AuthenticationOptionsHealthCheckAuthenticationBasic =
  | (typeof AuthenticationOptionsHealthCheckAuthenticationBasic)[keyof typeof AuthenticationOptionsHealthCheckAuthenticationBasic]
  | (string & {});

export const authenticationOptionsHealthCheckAuthenticationBasicSchema: EnumSchema<AuthenticationOptionsHealthCheckAuthenticationBasic> =
  s.enumOf<AuthenticationOptionsHealthCheckAuthenticationBasic>(
    AuthenticationOptionsHealthCheckAuthenticationBasic,
  );
