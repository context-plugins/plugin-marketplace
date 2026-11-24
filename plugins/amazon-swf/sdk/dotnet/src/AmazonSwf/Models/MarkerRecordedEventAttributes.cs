using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record MarkerRecordedEventAttributes
{
    /// <summary>
    /// The name of the marker.
    /// </summary>
    [JsonPropertyName("markerName")]
    public required string MarkerName { get; init; }

    /// <summary>
    /// The details of the marker.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public string? Details { get; init; }

    /// <summary>
    /// The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the RecordMarker decision that requested this marker. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("decisionTaskCompletedEventId")]
    public required int DecisionTaskCompletedEventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
