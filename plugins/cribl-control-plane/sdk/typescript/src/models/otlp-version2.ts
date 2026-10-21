import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The version of OTLP Protobuf definitions to use when interpreting received data */
export const OtlpVersion2 = {
  _0100: "0.10.0",
  _131: "1.3.1",
} as const;
export type OtlpVersion2 = (typeof OtlpVersion2)[keyof typeof OtlpVersion2] | (string & {});

export const otlpVersion2Schema: EnumSchema<OtlpVersion2> = s.enumOf<OtlpVersion2>(OtlpVersion2);
