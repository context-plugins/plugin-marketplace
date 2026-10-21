import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Maximum TLS version to allow for the connection. */
export const SecureVersion1 = {
  TlSv13: "TLSv1.3",
  TlSv12: "TLSv1.2",
  TlSv11: "TLSv1.1",
  TlSv1: "TLSv1",
} as const;
export type SecureVersion1 = (typeof SecureVersion1)[keyof typeof SecureVersion1] | (string & {});

export const secureVersion1Schema: EnumSchema<SecureVersion1> = s.enumOf<SecureVersion1>(SecureVersion1);
