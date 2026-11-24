using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Response for manually stop a backfill job for a specific stream object.
/// </summary>
public record StopBackfillJobResponse
{
    /// <summary>
    /// The stream object resource the backfill job was stopped for.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("object")]
    public StreamObject3? Object { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
