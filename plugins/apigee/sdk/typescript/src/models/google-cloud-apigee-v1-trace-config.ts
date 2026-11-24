import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exporterSchema, type Exporter } from "./exporter.js";
import {
  googleCloudApigeeV1TraceConfigOtelMtlsConfig2Schema,
  type GoogleCloudApigeeV1TraceConfigOtelMtlsConfig2,
} from "./google-cloud-apigee-v1-trace-config-otel-mtls-config2.js";
import {
  googleCloudApigeeV1TraceSamplingConfig3Schema,
  type GoogleCloudApigeeV1TraceSamplingConfig3,
} from "./google-cloud-apigee-v1-trace-sampling-config3.js";
import {
  otelCollectorSecuritySchemeSchema,
  type OtelCollectorSecurityScheme,
} from "./otel-collector-security-scheme.js";
import { spanSemanticsSchema, type SpanSemantics } from "./span-semantics.js";
import { traceProtocolSchema, type TraceProtocol } from "./trace-protocol.js";

/** TraceConfig defines the configurations in an environment of distributed trace. */
export type GoogleCloudApigeeV1TraceConfig = {
  /** Required. Endpoint of the exporter. */
  endpoint?: string;
  /**
   * Optional. The security scheme for the OTel Collector endpoint. Defaults to NONE
   * (unauthenticated OTLP/HTTP), preserving today's behavior for existing configurations. Only
   * applicable when `exporter` == OPEN_TELEMETRY_COLLECTOR.
   */
  otelCollectorSecurityScheme?: OtelCollectorSecurityScheme;
  /**
   * Optional. The trace protocol to use. Configuration Requirements (if trace_protocol is OTLP): -
   * Allowed Exporters: CLOUD_TRACE or OPEN_TELEMETRY_COLLECTOR. - If Exporter is
   * OPEN_TELEMETRY_COLLECTOR: - endpoint refers to a valid OTLP collector URL. - If Exporter is
   * CLOUD_TRACE: - endpoint refers to a valid project ID.
   */
  traceProtocol?: TraceProtocol;
  /**
   * Optional. The span semantics to use. Configuration Requirements (if span_semantics is OTEL): -
   * trace_protocol must be OTLP.
   */
  spanSemantics?: SpanSemantics;
  /**
   * Required. Exporter that is used to view the distributed trace captured using the chosen trace
   * protocol. An exporter sends traces to any backend that is capable of consuming them. Recorded
   * spans can be exported by registered exporters.
   */
  exporter?: Exporter;
  /**
   * Distributed trace configuration for all API proxies in an environment. You can also override
   * the configuration for a specific API proxy using the distributed trace configuration overrides
   * API.
   */
  samplingConfig?: GoogleCloudApigeeV1TraceSamplingConfig3;
  /**
   * Optional. mTLS configuration for the OTel Collector endpoint. Required when
   * `otel_collector_security_scheme` == MTLS; must not be set otherwise.
   */
  mtlsConfig?: GoogleCloudApigeeV1TraceConfigOtelMtlsConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1TraceConfigSchema: Schema<GoogleCloudApigeeV1TraceConfig> =
  s.object<GoogleCloudApigeeV1TraceConfig>(
    {
      endpoint: s.optional(s.string()),
      otelCollectorSecurityScheme: s.optional(s.lazy(() => otelCollectorSecuritySchemeSchema)),
      traceProtocol: s.optional(s.lazy(() => traceProtocolSchema)),
      spanSemantics: s.optional(s.lazy(() => spanSemanticsSchema)),
      exporter: s.optional(s.lazy(() => exporterSchema)),
      samplingConfig: s.optional(s.lazy(() => googleCloudApigeeV1TraceSamplingConfig3Schema)),
      mtlsConfig: s.optional(s.lazy(() => googleCloudApigeeV1TraceConfigOtelMtlsConfig2Schema)),
    },
    { additionalProperties: s.json() },
  );
