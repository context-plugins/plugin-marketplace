using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record CancelTimerDecisionAttributes
{
    /// <summary>
    /// The unique ID of the timer to cancel.
    /// </summary>
    [JsonPropertyName("timerId")]
    public required string TimerId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
