import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Minimum TLS version to use for the connection. */
export const MinimumTlsVersion9 = {
  TlSv1: "TLSv1",
  TlSv11: "TLSv1.1",
  TlSv12: "TLSv1.2",
  TlSv13: "TLSv1.3",
} as const;
export type MinimumTlsVersion9 = (typeof MinimumTlsVersion9)[keyof typeof MinimumTlsVersion9] | (string & {});

export const minimumTlsVersion9Schema: EnumSchema<MinimumTlsVersion9> =
  s.enumOf<MinimumTlsVersion9>(MinimumTlsVersion9);
