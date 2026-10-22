import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Minimum TLS version */
export const MinimumTlsVersion4 = {
  TlSv1: "TLSv1",
  TlSv11: "TLSv1.1",
  TlSv12: "TLSv1.2",
  TlSv13: "TLSv1.3",
} as const;
export type MinimumTlsVersion4 = (typeof MinimumTlsVersion4)[keyof typeof MinimumTlsVersion4] | (string & {});

export const minimumTlsVersion4Schema: EnumSchema<MinimumTlsVersion4> =
  s.enumOf<MinimumTlsVersion4>(MinimumTlsVersion4);
