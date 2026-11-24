import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. The trace protocol to use. Configuration Requirements (if trace_protocol is OTLP): -
 * Allowed Exporters: CLOUD_TRACE or OPEN_TELEMETRY_COLLECTOR. - If Exporter is
 * OPEN_TELEMETRY_COLLECTOR: - endpoint refers to a valid OTLP collector URL. - If Exporter is
 * CLOUD_TRACE: - endpoint refers to a valid project ID.
 */
export const TraceProtocol = {
  TraceProtocolUnspecified: "TRACE_PROTOCOL_UNSPECIFIED",
  OpenCensus: "OPEN_CENSUS",
  Otlp: "OTLP",
} as const;
export type TraceProtocol = (typeof TraceProtocol)[keyof typeof TraceProtocol] | (string & {});

export const traceProtocolSchema: EnumSchema<TraceProtocol> = s.enumOf<TraceProtocol>(TraceProtocol);
