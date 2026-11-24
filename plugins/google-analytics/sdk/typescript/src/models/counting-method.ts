import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. The method by which conversions will be counted across multiple events within a
 * session. If this value is not provided, it will be set to `ONCE_PER_EVENT`.
 */
export const CountingMethod = {
  ConversionCountingMethodUnspecified: "CONVERSION_COUNTING_METHOD_UNSPECIFIED",
  OncePerEvent: "ONCE_PER_EVENT",
  OncePerSession: "ONCE_PER_SESSION",
} as const;
export type CountingMethod = (typeof CountingMethod)[keyof typeof CountingMethod] | (string & {});

export const countingMethodSchema: EnumSchema<CountingMethod> = s.enumOf<CountingMethod>(CountingMethod);
