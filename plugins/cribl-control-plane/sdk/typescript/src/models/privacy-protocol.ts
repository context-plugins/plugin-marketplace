import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Privacy protocol used to encrypt SNMPv3 messages. */
export const PrivacyProtocol = {
  None: "none",
  Des: "des",
  Aes: "aes",
  Aes256B: "aes256b",
  Aes256R: "aes256r",
} as const;
export type PrivacyProtocol = (typeof PrivacyProtocol)[keyof typeof PrivacyProtocol] | (string & {});

export const privacyProtocolSchema: EnumSchema<PrivacyProtocol> = s.enumOf<PrivacyProtocol>(PrivacyProtocol);
