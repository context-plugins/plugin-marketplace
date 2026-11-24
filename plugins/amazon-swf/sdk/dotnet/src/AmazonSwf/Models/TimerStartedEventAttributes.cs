using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record TimerStartedEventAttributes
{
    /// <summary>
    /// The unique ID of the timer that was started.
    /// </summary>
    [JsonPropertyName("timerId")]
    public required string TimerId { get; init; }

    /// <summary>
    /// Data attached to the event that can be used by the decider in subsequent workflow tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("control")]
    public string? Control { get; init; }

    /// <summary>
    /// The duration of time after which the timer fires. The duration is specified in seconds, an integer greater than or equal to 0.
    /// </summary>
    [JsonPropertyName("startToFireTimeout")]
    public required string StartToFireTimeout { get; init; }

    /// <summary>
    /// The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the StartTimer decision for this activity task. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("decisionTaskCompletedEventId")]
    public required int DecisionTaskCompletedEventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
