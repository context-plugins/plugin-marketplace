import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** OpenTelemetry Protocol (OTLP) version to use for trace serialization. */
export const OtlpVersion1 = {
  _0100: "0.10.0",
  _131: "1.3.1",
} as const;
export type OtlpVersion1 = (typeof OtlpVersion1)[keyof typeof OtlpVersion1] | (string & {});

export const otlpVersion1Schema: EnumSchema<OtlpVersion1> = s.enumOf<OtlpVersion1>(OtlpVersion1);
