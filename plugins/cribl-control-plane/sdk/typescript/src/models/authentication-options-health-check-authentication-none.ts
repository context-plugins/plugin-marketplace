import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const AuthenticationOptionsHealthCheckAuthenticationNone = {
  None: "none",
} as const;
export type AuthenticationOptionsHealthCheckAuthenticationNone =
  | (typeof AuthenticationOptionsHealthCheckAuthenticationNone)[keyof typeof AuthenticationOptionsHealthCheckAuthenticationNone]
  | (string & {});

export const authenticationOptionsHealthCheckAuthenticationNoneSchema: EnumSchema<AuthenticationOptionsHealthCheckAuthenticationNone> =
  s.enumOf<AuthenticationOptionsHealthCheckAuthenticationNone>(
    AuthenticationOptionsHealthCheckAuthenticationNone,
  );
