import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Minimum TLS version to accept from clients. */
export const MinimumTlsVersion10 = {
  TlSv1: "TLSv1",
  TlSv11: "TLSv1.1",
  TlSv12: "TLSv1.2",
  TlSv13: "TLSv1.3",
} as const;
export type MinimumTlsVersion10 =
  | (typeof MinimumTlsVersion10)[keyof typeof MinimumTlsVersion10]
  | (string & {});

export const minimumTlsVersion10Schema: EnumSchema<MinimumTlsVersion10> =
  s.enumOf<MinimumTlsVersion10>(MinimumTlsVersion10);
