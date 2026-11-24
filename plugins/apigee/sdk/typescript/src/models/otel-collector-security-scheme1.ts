import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. Security scheme for the outbound connection to the customer-owned OpenTelemetry
 * Collector. Only meaningful when `exporter` is `OPEN_TELEMETRY_COLLECTOR`. Runtime consumers
 * unaware of a value should treat it as `OTEL_COLLECTOR_SECURITY_SCHEME_UNSPECIFIED` (== NONE).
 */
export const OtelCollectorSecurityScheme1 = {
  OtelCollectorSecuritySchemeUnspecified: "OTEL_COLLECTOR_SECURITY_SCHEME_UNSPECIFIED",
  None: "NONE",
  Mtls: "MTLS",
} as const;
export type OtelCollectorSecurityScheme1 =
  | (typeof OtelCollectorSecurityScheme1)[keyof typeof OtelCollectorSecurityScheme1]
  | (string & {});

export const otelCollectorSecurityScheme1Schema: EnumSchema<OtelCollectorSecurityScheme1> =
  s.enumOf<OtelCollectorSecurityScheme1>(OtelCollectorSecurityScheme1);
