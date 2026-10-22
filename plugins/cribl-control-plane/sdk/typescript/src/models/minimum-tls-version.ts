import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Minimum TLS version to use when connecting */
export const MinimumTlsVersion = {
  TlSv1: "TLSv1",
  TlSv11: "TLSv1.1",
  TlSv12: "TLSv1.2",
  TlSv13: "TLSv1.3",
} as const;
export type MinimumTlsVersion = (typeof MinimumTlsVersion)[keyof typeof MinimumTlsVersion] | (string & {});

export const minimumTlsVersionSchema: EnumSchema<MinimumTlsVersion> =
  s.enumOf<MinimumTlsVersion>(MinimumTlsVersion);
