using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record IntentLevelSlotResolutionTestResultItem
{
    /// <summary>
    /// The name of the intent that was recognized.
    /// </summary>
    [JsonPropertyName("intentName")]
    public required string IntentName { get; init; }

    /// <summary>
    /// Indicates whether the conversation involves multiple turns or not.
    /// </summary>
    [JsonPropertyName("multiTurnConversation")]
    public required bool MultiTurnConversation { get; init; }

    /// <summary>
    /// The results for the slot resolution in the test execution result.
    /// </summary>
    [JsonPropertyName("slotResolutionResults")]
    public required IReadOnlyList<SlotResolutionTestResultItem> SlotResolutionResults { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
