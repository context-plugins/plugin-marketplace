using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record ConversationLevelIntentClassificationResultItem
{
    /// <summary>
    /// The intent name used in the evaluation of intent level success or failure.
    /// </summary>
    [JsonPropertyName("intentName")]
    public required string IntentName { get; init; }

    /// <summary>
    /// The number of times the specific intent is used in the evaluation of intent level success or failure.
    /// </summary>
    [JsonPropertyName("matchResult")]
    public required MatchResult MatchResult { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
