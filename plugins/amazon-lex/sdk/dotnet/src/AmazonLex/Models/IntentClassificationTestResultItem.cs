using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record IntentClassificationTestResultItem
{
    /// <summary>
    /// The name of the intent.
    /// </summary>
    [JsonPropertyName("intentName")]
    public required string IntentName { get; init; }

    /// <summary>
    /// Indicates whether the conversation involves multiple turns or not.
    /// </summary>
    [JsonPropertyName("multiTurnConversation")]
    public required bool MultiTurnConversation { get; init; }

    [JsonPropertyName("resultCounts")]
    public required IntentClassificationTestResultItemCounts ResultCounts { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
