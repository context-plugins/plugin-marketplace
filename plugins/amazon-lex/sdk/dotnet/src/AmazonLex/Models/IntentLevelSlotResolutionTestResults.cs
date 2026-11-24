using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record IntentLevelSlotResolutionTestResults
{
    /// <summary>
    /// Indicates the items for the slot level resolution for the intents.
    /// </summary>
    [JsonPropertyName("items")]
    public required IReadOnlyList<IntentLevelSlotResolutionTestResultItem> Items { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
