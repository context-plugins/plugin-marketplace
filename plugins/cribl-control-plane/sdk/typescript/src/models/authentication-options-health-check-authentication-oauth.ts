import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const AuthenticationOptionsHealthCheckAuthenticationOauth = {
  Oauth: "oauth",
} as const;
export type AuthenticationOptionsHealthCheckAuthenticationOauth =
  | (typeof AuthenticationOptionsHealthCheckAuthenticationOauth)[keyof typeof AuthenticationOptionsHealthCheckAuthenticationOauth]
  | (string & {});

export const authenticationOptionsHealthCheckAuthenticationOauthSchema: EnumSchema<AuthenticationOptionsHealthCheckAuthenticationOauth> =
  s.enumOf<AuthenticationOptionsHealthCheckAuthenticationOauth>(
    AuthenticationOptionsHealthCheckAuthenticationOauth,
  );
