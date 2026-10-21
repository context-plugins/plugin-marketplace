import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Maximum TLS version to accept from clients. */
export const MaximumTlsVersion10 = {
  TlSv1: "TLSv1",
  TlSv11: "TLSv1.1",
  TlSv12: "TLSv1.2",
  TlSv13: "TLSv1.3",
} as const;
export type MaximumTlsVersion10 =
  | (typeof MaximumTlsVersion10)[keyof typeof MaximumTlsVersion10]
  | (string & {});

export const maximumTlsVersion10Schema: EnumSchema<MaximumTlsVersion10> =
  s.enumOf<MaximumTlsVersion10>(MaximumTlsVersion10);
