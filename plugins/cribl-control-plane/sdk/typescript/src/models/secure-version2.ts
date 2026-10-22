import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Minimum TLS version to allow for the connection. */
export const SecureVersion2 = {
  TlSv13: "TLSv1.3",
  TlSv12: "TLSv1.2",
  TlSv11: "TLSv1.1",
  TlSv1: "TLSv1",
} as const;
export type SecureVersion2 = (typeof SecureVersion2)[keyof typeof SecureVersion2] | (string & {});

export const secureVersion2Schema: EnumSchema<SecureVersion2> = s.enumOf<SecureVersion2>(SecureVersion2);
