using System.Text.Json.Serialization;
using AmazonLex.Core.Models;
using AmazonLex.Models.Enums;

namespace AmazonLex.Models;

public record ConversationLevelSlotResolutionResultItem
{
    /// <summary>
    /// The intents used in the slots list for the slot resolution details.
    /// </summary>
    [JsonPropertyName("intentName")]
    public required string IntentName { get; init; }

    /// <summary>
    /// The slot name in the slots list for the slot resolution details.
    /// </summary>
    [JsonPropertyName("slotName")]
    public required string SlotName { get; init; }

    /// <summary>
    /// The number of matching slots used in the slots listings for the slot resolution evaluation.
    /// </summary>
    [JsonPropertyName("matchResult")]
    public required MatchResult1 MatchResult { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
