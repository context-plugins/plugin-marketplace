using System.Text.Json.Serialization;
using Apigee.Core.Models;
using Apigee.Models.Enums;

namespace Apigee.Models;

/// <summary>
/// NEXT ID: 10 Trace configuration override for a specific API proxy in an environment.
/// </summary>
public record GoogleCloudApigeeV1RuntimeTraceConfigOverride
{
    /// <summary>
    /// Optional. The trace protocol to use.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("traceProtocol")]
    public TraceProtocol1? TraceProtocol { get; init; }

    /// <summary>
    /// Optional. If <c>true</c>, the runtime uses OpenTelemetry Protocol (OTLP) to send trace data. Configuration Requirements (if <c>open_telemetry_protocol_enabled</c> is <c>true</c>): - Allowed <c>Exporter</c>s: <c>CLOUD_TRACE</c> or <c>OPEN_TELEMETRY_COLLECTOR</c>. - If <c>Exporter</c> is <c>OPEN_TELEMETRY_COLLECTOR</c>: - <c>endpoint</c> refers to a valid OTLP collector URL. - If <c>Exporter</c> is <c>CLOUD_TRACE</c>: - <c>endpoint</c> refers to a valid project ID Deprecated: Use trace_protocol instead.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("openTelemetryProtocolEnabled")]
    public bool? OpenTelemetryProtocolEnabled { get; init; }

    /// <summary>
    /// The timestamp that the revision was created or updated.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionCreateTime")]
    public string? RevisionCreateTime { get; init; }

    /// <summary>
    /// Unique ID for the configuration override. The ID will only change if the override is deleted and recreated. Corresponds to name's "override" field.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("uid")]
    public string? Uid { get; init; }

    /// <summary>
    /// Name of the API proxy that will have its trace configuration overridden following format: <c>organizations/{org}/apis/{api}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("apiProxy")]
    public string? ApiProxy { get; init; }

    /// <summary>
    /// Optional. The span semantics to use. Configuration Requirements (if <c>span_semantics</c> is <c>OTEL</c>): - <c>trace_protocol</c> must be <c>OTLP</c>.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("spanSemantics")]
    public SpanSemantics1? SpanSemantics { get; init; }

    /// <summary>
    /// Revision number which can be used by the runtime to detect if the trace config override has changed between two versions.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("revisionId")]
    public string? RevisionId { get; init; }

    /// <summary>
    /// Trace configuration override for a specific API proxy in an environment.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("samplingConfig")]
    public GoogleCloudApigeeV1RuntimeTraceSamplingConfig1? SamplingConfig { get; init; }

    /// <summary>
    /// Name of the trace config override in the following format: <c>organizations/{org}/environment/{env}/traceConfig/overrides/{override}</c>
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("name")]
    public string? Name { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
