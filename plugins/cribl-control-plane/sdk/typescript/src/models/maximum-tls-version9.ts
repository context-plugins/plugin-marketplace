import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Maximum TLS version to use for the connection. */
export const MaximumTlsVersion9 = {
  TlSv1: "TLSv1",
  TlSv11: "TLSv1.1",
  TlSv12: "TLSv1.2",
  TlSv13: "TLSv1.3",
} as const;
export type MaximumTlsVersion9 = (typeof MaximumTlsVersion9)[keyof typeof MaximumTlsVersion9] | (string & {});

export const maximumTlsVersion9Schema: EnumSchema<MaximumTlsVersion9> =
  s.enumOf<MaximumTlsVersion9>(MaximumTlsVersion9);
