import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Format of the requested traces. */
export const TraceFormat = {
  Xray: "XRAY",
  Otel: "OTEL",
} as const;
export type TraceFormat = (typeof TraceFormat)[keyof typeof TraceFormat] | (string & {});

export const traceFormatSchema: EnumSchema<TraceFormat> = s.enumOf<TraceFormat>(TraceFormat);
