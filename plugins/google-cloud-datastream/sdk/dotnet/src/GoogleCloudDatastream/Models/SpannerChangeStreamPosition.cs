using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Represents a position in a Spanner change stream from which to start replicating.
/// </summary>
public record SpannerChangeStreamPosition
{
    /// <summary>
    /// Required. The timestamp to start change stream queries from. The timestamp must be a positive value.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("startTime")]
    public string? StartTime { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
