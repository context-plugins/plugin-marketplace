using System.Collections.Generic;
using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// Trace configurations. Contains config for the environment and config overrides for specific API proxies.
/// </summary>
public record GoogleCloudApigeeV1RuntimeTraceConfig1
{
    /// <summary>
    /// Trace configuration for all API proxies in an environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("samplingConfig")]
    public GoogleCloudApigeeV1RuntimeTraceSamplingConfig3? SamplingConfig { get; init; }

    /// <summary>
    /// Endpoint of the exporter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpoint")]
    public string? Endpoint { get; init; }

    /// <summary>
    /// Name of the trace config in the following format: <c>organizations/{org}/environment/{env}/traceConfig</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    /// <summary>
    /// Optional. The span semantics to use. Configuration Requirements (if <c>span_semantics</c> is <c>OTEL</c>): - <c>trace_protocol</c> must be <c>OTLP</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spanSemantics")]
    public SpanSemantics1? SpanSemantics { get; init; }

    /// <summary>
    /// List of trace configuration overrides for spicific API proxies.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("overrides")]
    public IReadOnlyList<GoogleCloudApigeeV1RuntimeTraceConfigOverride>? Overrides { get; init; }

    /// <summary>
    /// Optional. mTLS configuration for the OTel Collector endpoint. Required when <c>otel_collector_security_scheme</c> is <c>MTLS</c>; must be absent otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mTlsConfig")]
    public GoogleCloudApigeeV1RuntimeTraceConfigOtelMtlsConfig1? MTlsConfig { get; init; }

    /// <summary>
    /// Optional. Security scheme for the outbound connection to the customer-owned OpenTelemetry Collector. Only meaningful when <c>exporter</c> is <c>OPEN_TELEMETRY_COLLECTOR</c>. Runtime consumers unaware of a value should treat it as <c>OTEL_COLLECTOR_SECURITY_SCHEME_UNSPECIFIED</c> (== NONE).
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("otelCollectorSecurityScheme")]
    public OtelCollectorSecurityScheme1? OtelCollectorSecurityScheme { get; init; }

    /// <summary>
    /// Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exporter")]
    public Exporter1? Exporter { get; init; }

    /// <summary>
    /// Optional. If <c>true</c>, the runtime uses OpenTelemetry Protocol (OTLP) to send trace data. Configuration Requirements (if <c>open_telemetry_protocol_enabled</c> is <c>true</c>): - Allowed <c>Exporter</c>s: <c>CLOUD_TRACE</c> or <c>OPEN_TELEMETRY_COLLECTOR</c>. - If <c>Exporter</c> is <c>OPEN_TELEMETRY_COLLECTOR</c>: - <c>endpoint</c> refers to a valid OTLP collector URL. - If <c>Exporter</c> is <c>CLOUD_TRACE</c>: - <c>endpoint</c> refers to a valid project ID Deprecated: Use trace_protocol instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("openTelemetryProtocolEnabled")]
    public bool? OpenTelemetryProtocolEnabled { get; init; }

    /// <summary>
    /// Optional. The trace protocol to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("traceProtocol")]
    public TraceProtocol1? TraceProtocol { get; init; }

    /// <summary>
    /// Revision number which can be used by the runtime to detect if the trace config has changed between two versions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionId")]
    public string? RevisionId { get; init; }

    /// <summary>
    /// The timestamp that the revision was created or updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionCreateTime")]
    public string? RevisionCreateTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
