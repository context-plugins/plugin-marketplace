using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record DecisionTaskTimedOutEventAttributes
{
    /// <summary>
    /// The type of timeout that expired before the decision task could be completed.
    /// </summary>
    [JsonPropertyName("timeoutType")]
    public required TimeoutType1 TimeoutType { get; init; }

    /// <summary>
    /// The ID of the DecisionTaskScheduled event that was recorded when this decision task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("scheduledEventId")]
    public required int ScheduledEventId { get; init; }

    /// <summary>
    /// The ID of the DecisionTaskStarted event recorded when this decision task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("startedEventId")]
    public required int StartedEventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
