using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record RecommendedIntentSummary
{
    /// <summary>
    /// The unique identifier of a recommended intent associated with the bot recommendation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentId")]
    public string? IntentId { get; init; }

    /// <summary>
    /// The name of a recommended intent associated with the bot recommendation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("intentName")]
    public string? IntentName { get; init; }

    /// <summary>
    /// The count of sample utterances of a recommended intent that is associated with a bot recommendation.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("sampleUtterancesCount")]
    public int? SampleUtterancesCount { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
