import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication protocol for the SNMPv3 user. */
export const AuthProtocol = {
  None: "none",
} as const;
export type AuthProtocol = (typeof AuthProtocol)[keyof typeof AuthProtocol] | (string & {});

export const authProtocolSchema: EnumSchema<AuthProtocol> = s.enumOf<AuthProtocol>(AuthProtocol);
