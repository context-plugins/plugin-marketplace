using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record LambdaFunctionCompletedEventAttributes
{
    /// <summary>
    /// The ID of the LambdaFunctionScheduled event that was recorded when this Lambda task was scheduled. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("scheduledEventId")]
    public required int ScheduledEventId { get; init; }

    /// <summary>
    /// The ID of the LambdaFunctionStarted event recorded when this activity task started. To help diagnose issues, use this information to trace back the chain of events leading up to this event.
    /// </summary>
    [JsonPropertyName("startedEventId")]
    public required int StartedEventId { get; init; }

    /// <summary>
    /// The results of the Lambda task.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("result")]
    public string? Result { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
