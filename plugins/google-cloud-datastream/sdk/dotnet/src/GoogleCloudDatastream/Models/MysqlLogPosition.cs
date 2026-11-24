using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// MySQL log position
/// </summary>
public record MysqlLogPosition
{
    /// <summary>
    /// Required. The binary log file name.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logFile")]
    public string? LogFile { get; init; }

    /// <summary>
    /// Optional. The position within the binary log file. Default is head of file.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("logPosition")]
    public int? LogPosition { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
