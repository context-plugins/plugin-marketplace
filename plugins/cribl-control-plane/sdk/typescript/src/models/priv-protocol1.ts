import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Privacy protocol used to encrypt SNMPv3 messages. */
export const PrivProtocol1 = {
  Des: "des",
  Aes: "aes",
  Aes256B: "aes256b",
  Aes256R: "aes256r",
} as const;
export type PrivProtocol1 = (typeof PrivProtocol1)[keyof typeof PrivProtocol1] | (string & {});

export const privProtocol1Schema: EnumSchema<PrivProtocol1> = s.enumOf<PrivProtocol1>(PrivProtocol1);
