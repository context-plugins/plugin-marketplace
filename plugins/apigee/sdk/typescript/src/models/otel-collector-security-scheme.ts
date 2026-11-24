import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. The security scheme for the OTel Collector endpoint. Defaults to NONE (unauthenticated
 * OTLP/HTTP), preserving today's behavior for existing configurations. Only applicable when
 * `exporter` == OPEN_TELEMETRY_COLLECTOR.
 */
export const OtelCollectorSecurityScheme = {
  OtelCollectorSecuritySchemeUnspecified: "OTEL_COLLECTOR_SECURITY_SCHEME_UNSPECIFIED",
  None: "NONE",
  Mtls: "MTLS",
} as const;
export type OtelCollectorSecurityScheme =
  | (typeof OtelCollectorSecurityScheme)[keyof typeof OtelCollectorSecurityScheme]
  | (string & {});

export const otelCollectorSecuritySchemeSchema: EnumSchema<OtelCollectorSecurityScheme> =
  s.enumOf<OtelCollectorSecurityScheme>(OtelCollectorSecurityScheme);
