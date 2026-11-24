using System.Text.Json.Serialization;
using GoogleCloudEventarc.Core.Models;
using GoogleCloudEventarc.Models.Enums;

namespace GoogleCloudEventarc.Models;

/// <summary>
/// The configuration for Platform Telemetry logging for Eventarc Advanced resources.
/// </summary>
public record LoggingConfig
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
