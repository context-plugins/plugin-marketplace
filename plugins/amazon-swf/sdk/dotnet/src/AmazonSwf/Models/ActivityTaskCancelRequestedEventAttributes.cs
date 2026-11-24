using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record ActivityTaskCancelRequestedEventAttributes
{
    /// <summary>
    /// The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the RequestCancelActivityTask decision for this cancellation request. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("decisionTaskCompletedEventId")]
    public required int DecisionTaskCompletedEventId { get; init; }

    /// <summary>
    /// The unique ID of the task.
    /// </summary>
    [JsonPropertyName("activityId")]
    public required string ActivityId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
