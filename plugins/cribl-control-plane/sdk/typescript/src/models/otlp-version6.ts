import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** OpenTelemetry Protocol (OTLP) version to use for metric serialization. */
export const OtlpVersion6 = {
  _0100: "0.10.0",
  _131: "1.3.1",
} as const;
export type OtlpVersion6 = (typeof OtlpVersion6)[keyof typeof OtlpVersion6] | (string & {});

export const otlpVersion6Schema: EnumSchema<OtlpVersion6> = s.enumOf<OtlpVersion6>(OtlpVersion6);
