import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Maximum TLS version to use when connecting */
export const MaximumTlsVersion = {
  TlSv1: "TLSv1",
  TlSv11: "TLSv1.1",
  TlSv12: "TLSv1.2",
  TlSv13: "TLSv1.3",
} as const;
export type MaximumTlsVersion = (typeof MaximumTlsVersion)[keyof typeof MaximumTlsVersion] | (string & {});

export const maximumTlsVersionSchema: EnumSchema<MaximumTlsVersion> =
  s.enumOf<MaximumTlsVersion>(MaximumTlsVersion);
