import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1RuntimeTraceSamplingConfig1Schema,
  type GoogleCloudApigeeV1RuntimeTraceSamplingConfig1,
} from "./google-cloud-apigee-v1-runtime-trace-sampling-config1.js";
import { spanSemantics1Schema, type SpanSemantics1 } from "./span-semantics1.js";
import { traceProtocol1Schema, type TraceProtocol1 } from "./trace-protocol1.js";

/** NEXT ID: 10 Trace configuration override for a specific API proxy in an environment. */
export type GoogleCloudApigeeV1RuntimeTraceConfigOverride = {
  /** Optional. The trace protocol to use. */
  traceProtocol?: TraceProtocol1;
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
  /** The timestamp that the revision was created or updated. */
  revisionCreateTime?: string;
  /**
   * Unique ID for the configuration override. The ID will only change if the override is deleted
   * and recreated. Corresponds to name's "override" field.
   */
  uid?: string;
  /**
   * Name of the API proxy that will have its trace configuration overridden following format:
   * `organizations/{org}/apis/{api}`
   */
  apiProxy?: string;
  /**
   * Optional. The span semantics to use. Configuration Requirements (if `span_semantics` is
   * `OTEL`): - `trace_protocol` must be `OTLP`.
   */
  spanSemantics?: SpanSemantics1;
  /**
   * Revision number which can be used by the runtime to detect if the trace config override has
   * changed between two versions.
   */
  revisionId?: string;
  /** Trace configuration override for a specific API proxy in an environment. */
  samplingConfig?: GoogleCloudApigeeV1RuntimeTraceSamplingConfig1;
  /**
   * Name of the trace config override in the following format:
   * `organizations/{org}/environment/{env}/traceConfig/overrides/{override}`
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1RuntimeTraceConfigOverrideSchema: Schema<GoogleCloudApigeeV1RuntimeTraceConfigOverride> =
  s.object<GoogleCloudApigeeV1RuntimeTraceConfigOverride>(
    {
      traceProtocol: s.optional(s.lazy(() => traceProtocol1Schema)),
      openTelemetryProtocolEnabled: s.optional(s.boolean()),
      revisionCreateTime: s.optional(s.string()),
      uid: s.optional(s.string()),
      apiProxy: s.optional(s.string()),
      spanSemantics: s.optional(s.lazy(() => spanSemantics1Schema)),
      revisionId: s.optional(s.string()),
      samplingConfig: s.optional(s.lazy(() => googleCloudApigeeV1RuntimeTraceSamplingConfig1Schema)),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
