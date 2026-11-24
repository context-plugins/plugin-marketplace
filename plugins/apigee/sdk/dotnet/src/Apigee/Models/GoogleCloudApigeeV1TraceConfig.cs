using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// TraceConfig defines the configurations in an environment of distributed trace.
/// </summary>
public record GoogleCloudApigeeV1TraceConfig
{
    /// <summary>
    /// Required. Endpoint of the exporter.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("endpoint")]
    public string? Endpoint { get; init; }

    /// <summary>
    /// Optional. The security scheme for the OTel Collector endpoint. Defaults to NONE (unauthenticated OTLP/HTTP), preserving today's behavior for existing configurations. Only applicable when <c>exporter</c> == OPEN_TELEMETRY_COLLECTOR.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("otelCollectorSecurityScheme")]
    public OtelCollectorSecurityScheme? OtelCollectorSecurityScheme { get; init; }

    /// <summary>
    /// Optional. The trace protocol to use. Configuration Requirements (if trace_protocol is OTLP): - Allowed Exporters: CLOUD_TRACE or OPEN_TELEMETRY_COLLECTOR. - If Exporter is OPEN_TELEMETRY_COLLECTOR: - endpoint refers to a valid OTLP collector URL. - If Exporter is CLOUD_TRACE: - endpoint refers to a valid project ID.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("traceProtocol")]
    public TraceProtocol? TraceProtocol { get; init; }

    /// <summary>
    /// Optional. The span semantics to use. Configuration Requirements (if span_semantics is OTEL): - trace_protocol must be OTLP.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spanSemantics")]
    public SpanSemantics? SpanSemantics { get; init; }

    /// <summary>
    /// Required. Exporter that is used to view the distributed trace captured using the chosen trace protocol. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("exporter")]
    public Exporter? Exporter { get; init; }

    /// <summary>
    /// Distributed trace configuration for all API proxies in an environment. You can also override the configuration for a specific API proxy using the distributed trace configuration overrides API.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("samplingConfig")]
    public GoogleCloudApigeeV1TraceSamplingConfig3? SamplingConfig { get; init; }

    /// <summary>
    /// Optional. mTLS configuration for the OTel Collector endpoint. Required when <c>otel_collector_security_scheme</c> == MTLS; must not be set otherwise.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mtlsConfig")]
    public GoogleCloudApigeeV1TraceConfigOtelMtlsConfig2? MtlsConfig { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
