import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Fixed Google Cloud Observability gRPC endpoint. All three signals share this transport; the OTLP
 * service path determines whether the call lands on traces, metrics, or logs.
 */
export const Endpoint = {
  TelemetryGoogleapisCom443: "telemetry.googleapis.com:443",
} as const;
export type Endpoint = (typeof Endpoint)[keyof typeof Endpoint] | (string & {});

export const endpointSchema: EnumSchema<Endpoint> = s.enumOf<Endpoint>(Endpoint);
