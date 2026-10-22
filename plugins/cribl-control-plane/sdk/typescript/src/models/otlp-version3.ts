import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminator value. */
export const OtlpVersion3 = {
  _131: "1.3.1",
} as const;
export type OtlpVersion3 = (typeof OtlpVersion3)[keyof typeof OtlpVersion3] | (string & {});

export const otlpVersion3Schema: EnumSchema<OtlpVersion3> = s.enumOf<OtlpVersion3>(OtlpVersion3);
