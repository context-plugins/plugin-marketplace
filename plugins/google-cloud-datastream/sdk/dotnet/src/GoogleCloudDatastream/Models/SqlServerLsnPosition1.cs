using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// SqlServer LSN to start replicating from.
/// </summary>
public record SqlServerLsnPosition1
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
