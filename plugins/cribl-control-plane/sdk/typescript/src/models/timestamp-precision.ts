import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Sets the precision for the supplied Unix time values. Defaults to milliseconds. */
export const TimestampPrecision = {
  Ns: "ns",
  U: "u",
  Ms: "ms",
  S: "s",
  M: "m",
  H: "h",
} as const;
export type TimestampPrecision = (typeof TimestampPrecision)[keyof typeof TimestampPrecision] | (string & {});

export const timestampPrecisionSchema: EnumSchema<TimestampPrecision> =
  s.enumOf<TimestampPrecision>(TimestampPrecision);
