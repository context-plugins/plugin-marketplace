using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// SQL Server LSN position
/// </summary>
public record SqlServerLsnPosition
{
    /// <summary>
    /// Required. Log sequence number (LSN) from where Logs will be read
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("lsn")]
    public string? Lsn { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
