import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The version of OTLP Protobuf definitions to use when structuring data to send */
export const OtlpVersion4 = {
  _0100: "0.10.0",
  _131: "1.3.1",
} as const;
export type OtlpVersion4 = (typeof OtlpVersion4)[keyof typeof OtlpVersion4] | (string & {});

export const otlpVersion4Schema: EnumSchema<OtlpVersion4> = s.enumOf<OtlpVersion4>(OtlpVersion4);
