using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Optional. The configuration specifying telemetry settings for the Dataproc Metastore service. If unspecified defaults to JSON.
/// </summary>
public record TelemetryConfig2
{
    /// <summary>
    /// Optional. The output format of the Dataproc Metastore service's logs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logFormat")]
    public LogFormat? LogFormat { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
