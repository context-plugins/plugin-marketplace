using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Configuration to specify the Oracle directories to access the log files.
/// </summary>
public record LogFileDirectories
{
    /// <summary>
    /// Required. Oracle directory for archived logs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("archivedLogDirectory")]
    public string? ArchivedLogDirectory { get; init; }

    /// <summary>
    /// Required. Oracle directory for online logs.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("onlineLogDirectory")]
    public string? OnlineLogDirectory { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
