import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The version of OTLP Protobuf definitions to use when structuring data to send */
export const OtlpVersion = {
  _131: "1.3.1",
} as const;
export type OtlpVersion = (typeof OtlpVersion)[keyof typeof OtlpVersion] | (string & {});

export const otlpVersionSchema: EnumSchema<OtlpVersion> = s.enumOf<OtlpVersion>(OtlpVersion);
