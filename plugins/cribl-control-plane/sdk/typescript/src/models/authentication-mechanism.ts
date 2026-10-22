import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication mechanism */
export const AuthenticationMechanism = {
  ConnectionString: "connection-string",
  OauthBearer: "oauth-bearer",
} as const;
export type AuthenticationMechanism =
  | (typeof AuthenticationMechanism)[keyof typeof AuthenticationMechanism]
  | (string & {});

export const authenticationMechanismSchema: EnumSchema<AuthenticationMechanism> =
  s.enumOf<AuthenticationMechanism>(AuthenticationMechanism);
