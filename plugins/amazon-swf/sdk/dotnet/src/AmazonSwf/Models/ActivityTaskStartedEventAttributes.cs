using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record ActivityTaskStartedEventAttributes
{
    /// <summary>
    /// Identity of the worker that was assigned this task. This aids diagnostics when problems arise. The form of this identity is user defined.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("identity")]
    public string? Identity { get; init; }

    /// <summary>
    /// The ID of the ActivityTaskScheduled event that was recorded when this activity task was scheduled. This information can be useful for diagnosing problems by tracing back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("scheduledEventId")]
    public required int ScheduledEventId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
