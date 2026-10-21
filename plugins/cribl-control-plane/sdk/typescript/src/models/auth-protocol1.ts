import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication protocol for the SNMPv3 user. */
export const AuthProtocol1 = {
  Md5: "md5",
  Sha: "sha",
  Sha224: "sha224",
  Sha256: "sha256",
  Sha384: "sha384",
  Sha512: "sha512",
} as const;
export type AuthProtocol1 = (typeof AuthProtocol1)[keyof typeof AuthProtocol1] | (string & {});

export const authProtocol1Schema: EnumSchema<AuthProtocol1> = s.enumOf<AuthProtocol1>(AuthProtocol1);
