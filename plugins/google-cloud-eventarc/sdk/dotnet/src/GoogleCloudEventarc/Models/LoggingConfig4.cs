using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;
using GoogleCloudEventarc.Models.Enums;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// Optional. Config to control Platform logging for the GoogleApiSource.
/// </summary>
public record LoggingConfig4
{
    /// <summary>
    /// Optional. The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. Logs at severitiy ≥ this value will be sent, unless it is NONE.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logSeverity")]
    public LogSeverity? LogSeverity { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
