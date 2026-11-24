using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record StartTimerDecisionAttributes
{
    /// <summary>
    /// The unique ID of the timer. The specified string must not contain a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f | \u007f-\u009f). Also, it must not be the literal string arn.
    /// </summary>
    [JsonPropertyName("timerId")]
    public required string TimerId { get; init; }

    /// <summary>
    /// The data attached to the event that can be used by the decider in subsequent workflow tasks.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("control")]
    public string? Control { get; init; }

    /// <summary>
    /// The duration to wait before firing the timer. The duration is specified in seconds, an integer greater than or equal to 0.
    /// </summary>
    [JsonPropertyName("startToFireTimeout")]
    public required string StartToFireTimeout { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
