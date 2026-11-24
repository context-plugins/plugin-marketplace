using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record ActivityTaskTimedOutEventAttributes
{
    /// <summary>
    /// The type of the timeout that caused this event.
    /// </summary>
    [JsonPropertyName("timeoutType")]
    public required TimeoutType TimeoutType { get; init; }

    /// <summary>
    /// The ID of the ActivityTaskScheduled event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("scheduledEventId")]
    public required int ScheduledEventId { get; init; }

    /// <summary>
    /// The ID of the ActivityTaskStarted event recorded when this activity task was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("startedEventId")]
    public required int StartedEventId { get; init; }

    /// <summary>
    /// Contains the content of the details parameter for the last call made by the activity to RecordActivityTaskHeartbeat.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("details")]
    public string? Details { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
