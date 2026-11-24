import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The trace protocol to use. */
export const TraceProtocol1 = {
  TraceProtocolUnspecified: "TRACE_PROTOCOL_UNSPECIFIED",
  OpenCensus: "OPEN_CENSUS",
  Otlp: "OTLP",
} as const;
export type TraceProtocol1 = (typeof TraceProtocol1)[keyof typeof TraceProtocol1] | (string & {});

export const traceProtocol1Schema: EnumSchema<TraceProtocol1> = s.enumOf<TraceProtocol1>(TraceProtocol1);
