using System.Text.Json.Serialization;
using AmazonSwf.Core.Models;

namespace AmazonSwf.Models;

public record RequestCancelActivityTaskDecisionAttributes
{
    /// <summary>
    /// The activityId of the activity task to be canceled.
    /// </summary>
    [JsonPropertyName("activityId")]
    public required string ActivityId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
