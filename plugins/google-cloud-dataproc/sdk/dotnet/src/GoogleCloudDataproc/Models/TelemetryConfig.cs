using System.Text.Json.Serialization;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Models.Enums;

namespace GoogleCloudDataproc.Models;

/// <summary>
/// Telemetry Configuration for the Dataproc Metastore service.
/// </summary>
public record TelemetryConfig
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
