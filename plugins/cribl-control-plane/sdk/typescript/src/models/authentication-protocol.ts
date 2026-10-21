import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication protocol for the SNMPv3 user. */
export const AuthenticationProtocol = {
  None: "none",
  Md5: "md5",
  Sha: "sha",
  Sha224: "sha224",
  Sha256: "sha256",
  Sha384: "sha384",
  Sha512: "sha512",
} as const;
export type AuthenticationProtocol =
  | (typeof AuthenticationProtocol)[keyof typeof AuthenticationProtocol]
  | (string & {});

export const authenticationProtocolSchema: EnumSchema<AuthenticationProtocol> =
  s.enumOf<AuthenticationProtocol>(AuthenticationProtocol);
