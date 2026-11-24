using System.Text.Json.Serialization;
using GoogleCloudDatastream.Core.Models;

namespace GoogleCloudDatastream.Models;

/// <summary>
/// Request for manually initiating a backfill job for a specific stream object.
/// </summary>
public record StartBackfillJobRequest
{
    /// <summary>
    /// Optional. Optional event filter. If not set, or empty, the backfill will be performed on the entire object. This is currently used for partial backfill and only supported for SQL sources.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("eventFilter")]
    public EventFilter1? EventFilter { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
