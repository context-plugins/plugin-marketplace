using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;
using AmazonSwf.Models.Enums;

namespace AmazonSwf.Models;

public record LambdaFunctionTimedOutEventAttributes
{
    /// <summary>
    /// The ID of the LambdaFunctionScheduled event that was recorded when this activity task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("scheduledEventId")]
    public required int ScheduledEventId { get; init; }

    /// <summary>
    /// The ID of the ActivityTaskStarted event that was recorded when this activity task started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("startedEventId")]
    public required int StartedEventId { get; init; }

    /// <summary>
    /// The type of the timeout that caused this event.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("timeoutType")]
    public TimeoutType2? TimeoutType { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
