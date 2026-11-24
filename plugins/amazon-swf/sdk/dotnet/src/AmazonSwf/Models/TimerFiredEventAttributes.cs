using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record TimerFiredEventAttributes
{
    /// <summary>
    /// The unique ID of the timer that fired.
    /// </summary>
    [JsonPropertyName("timerId")]
    public required string TimerId { get; init; }

    /// <summary>
    /// The ID of the TimerStarted event that was recorded when this timer was started. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("startedEventId")]
    public required int StartedEventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
