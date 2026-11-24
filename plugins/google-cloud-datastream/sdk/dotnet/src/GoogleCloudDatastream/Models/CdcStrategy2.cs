using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Optional. The CDC strategy of the stream. If not set, the system's default value will be used.
/// </summary>
public record CdcStrategy2
{
    /// <summary>
    /// Optional. Start replicating from the most recent position in the source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("mostRecentStartPosition")]
    public object? MostRecentStartPosition { get; init; }

    /// <summary>
    /// Optional. Resume replication from the next available position in the source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("nextAvailableStartPosition")]
    public object? NextAvailableStartPosition { get; init; }

    /// <summary>
    /// Optional. Start replicating from a specific position in the source.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("specificStartPosition")]
    public SpecificStartPosition2? SpecificStartPosition { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
