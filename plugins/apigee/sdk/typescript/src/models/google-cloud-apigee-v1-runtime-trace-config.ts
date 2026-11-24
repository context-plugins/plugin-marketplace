import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { exporter1Schema, type Exporter1 } from "./exporter1.js";
import {
  googleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig1Schema,
  type GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig1,
} from "./google-cloud-apigee-v1-runtime-trace-config-otel-mtls-config1.js";
import {
  googleCloudApigeeV1RuntimeTraceConfigOverrideSchema,
  type GoogleCloudApigeeV1RuntimeTraceConfigOverride,
} from "./google-cloud-apigee-v1-runtime-trace-config-override.js";
import {
  googleCloudApigeeV1RuntimeTraceSamplingConfig3Schema,
  type GoogleCloudApigeeV1RuntimeTraceSamplingConfig3,
} from "./google-cloud-apigee-v1-runtime-trace-sampling-config3.js";
import {
  otelCollectorSecurityScheme1Schema,
  type OtelCollectorSecurityScheme1,
} from "./otel-collector-security-scheme1.js";
import { spanSemantics1Schema, type SpanSemantics1 } from "./span-semantics1.js";
import { traceProtocol1Schema, type TraceProtocol1 } from "./trace-protocol1.js";

/**
 * NEXT ID: 13 RuntimeTraceConfig defines the configurations for distributed trace in an
 * environment.
 */
export type GoogleCloudApigeeV1RuntimeTraceConfig = {
  /** Trace configuration for all API proxies in an environment. */
  samplingConfig?: GoogleCloudApigeeV1RuntimeTraceSamplingConfig3;
  /** Endpoint of the exporter. */
  endpoint?: string;
  /**
   * Name of the trace config in the following format:
   * `organizations/{org}/environment/{env}/traceConfig`
   */
  name?: string;
  /**
   * Optional. The span semantics to use. Configuration Requirements (if `span_semantics` is
   * `OTEL`): - `trace_protocol` must be `OTLP`.
   */
  spanSemantics?: SpanSemantics1;
  /** List of trace configuration overrides for spicific API proxies. */
  overrides?: GoogleCloudApigeeV1RuntimeTraceConfigOverride[];
  /**
   * Optional. mTLS configuration for the OTel Collector endpoint. Required when
   * `otel_collector_security_scheme` is `MTLS`; must be absent otherwise.
   */
  mTlsConfig?: GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig1;
  /**
   * Optional. Security scheme for the outbound connection to the customer-owned OpenTelemetry
   * Collector. Only meaningful when `exporter` is `OPEN_TELEMETRY_COLLECTOR`. Runtime consumers
   * unaware of a value should treat it as `OTEL_COLLECTOR_SECURITY_SCHEME_UNSPECIFIED` (== NONE).
   */
  otelCollectorSecurityScheme?: OtelCollectorSecurityScheme1;
  /**
   * Exporter that is used to view the distributed trace captured using OpenCensus. An exporter
   * sends traces to any backend that is capable of consuming them. Recorded spans can be exported
   * by registered exporters.
   */
  exporter?: Exporter1;
  /**
   * Optional. If `true`, the runtime uses OpenTelemetry Protocol (OTLP) to send trace data.
   * Configuration Requirements (if `open_telemetry_protocol_enabled` is `true`): - Allowed
   * `Exporter`s: `CLOUD_TRACE` or `OPEN_TELEMETRY_COLLECTOR`. - If `Exporter` is
   * `OPEN_TELEMETRY_COLLECTOR`: - `endpoint` refers to a valid OTLP collector URL. - If `Exporter`
   * is `CLOUD_TRACE`: - `endpoint` refers to a valid project ID Deprecated: Use trace_protocol
   * instead.
   *
   * @deprecated
   */
  openTelemetryProtocolEnabled?: boolean;
  /** Optional. The trace protocol to use. */
  traceProtocol?: TraceProtocol1;
  /**
   * Revision number which can be used by the runtime to detect if the trace config has changed
   * between two versions.
   */
  revisionId?: string;
  /** The timestamp that the revision was created or updated. */
  revisionCreateTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RuntimeTraceConfigSchema: Schema<GoogleCloudApigeeV1RuntimeTraceConfig> =
  s.object<GoogleCloudApigeeV1RuntimeTraceConfig>(
    {
      samplingConfig: s.optional(s.lazy(() => googleCloudApigeeV1RuntimeTraceSamplingConfig3Schema)),
      endpoint: s.optional(s.string()),
      name: s.optional(s.string()),
      spanSemantics: s.optional(s.lazy(() => spanSemantics1Schema)),
      overrides: s.optional(s.array(s.lazy(() => googleCloudApigeeV1RuntimeTraceConfigOverrideSchema))),
      mTlsConfig: s.optional(s.lazy(() => googleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig1Schema)),
      otelCollectorSecurityScheme: s.optional(s.lazy(() => otelCollectorSecurityScheme1Schema)),
      exporter: s.optional(s.lazy(() => exporter1Schema)),
      openTelemetryProtocolEnabled: s.optional(s.boolean()),
      traceProtocol: s.optional(s.lazy(() => traceProtocol1Schema)),
      revisionId: s.optional(s.string()),
      revisionCreateTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
