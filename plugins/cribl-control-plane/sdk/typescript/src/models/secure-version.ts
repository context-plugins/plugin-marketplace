import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SecureVersion = {
  TlSv13: "TLSv1.3",
  TlSv12: "TLSv1.2",
  TlSv11: "TLSv1.1",
  TlSv1: "TLSv1",
} as const;
export type SecureVersion = (typeof SecureVersion)[keyof typeof SecureVersion] | (string & {});

export const secureVersionSchema: EnumSchema<SecureVersion> = s.enumOf<SecureVersion>(SecureVersion);
