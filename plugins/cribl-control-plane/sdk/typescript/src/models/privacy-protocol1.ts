import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Privacy protocol */
export const PrivacyProtocol1 = {
  None: "none",
  Des: "des",
  Aes: "aes",
  Aes256B: "aes256b",
  Aes256R: "aes256r",
} as const;
export type PrivacyProtocol1 = (typeof PrivacyProtocol1)[keyof typeof PrivacyProtocol1] | (string & {});

export const privacyProtocol1Schema: EnumSchema<PrivacyProtocol1> =
  s.enumOf<PrivacyProtocol1>(PrivacyProtocol1);
