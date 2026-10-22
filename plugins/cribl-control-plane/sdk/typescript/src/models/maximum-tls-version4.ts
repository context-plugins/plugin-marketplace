import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Maximum TLS version */
export const MaximumTlsVersion4 = {
  TlSv1: "TLSv1",
  TlSv11: "TLSv1.1",
  TlSv12: "TLSv1.2",
  TlSv13: "TLSv1.3",
} as const;
export type MaximumTlsVersion4 = (typeof MaximumTlsVersion4)[keyof typeof MaximumTlsVersion4] | (string & {});

export const maximumTlsVersion4Schema: EnumSchema<MaximumTlsVersion4> =
  s.enumOf<MaximumTlsVersion4>(MaximumTlsVersion4);
