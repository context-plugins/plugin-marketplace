import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const AuthenticationOptionsHealthCheckAuthenticationOauthSecret = {
  OauthSecret: "oauthSecret",
} as const;
export type AuthenticationOptionsHealthCheckAuthenticationOauthSecret =
  | (typeof AuthenticationOptionsHealthCheckAuthenticationOauthSecret)[keyof typeof AuthenticationOptionsHealthCheckAuthenticationOauthSecret]
  | (string & {});

export const authenticationOptionsHealthCheckAuthenticationOauthSecretSchema: EnumSchema<AuthenticationOptionsHealthCheckAuthenticationOauthSecret> =
  s.enumOf<AuthenticationOptionsHealthCheckAuthenticationOauthSecret>(
    AuthenticationOptionsHealthCheckAuthenticationOauthSecret,
  );
