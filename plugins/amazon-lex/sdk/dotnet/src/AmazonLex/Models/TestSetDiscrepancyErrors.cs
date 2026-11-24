using System.Collections.Generic;
using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record TestSetDiscrepancyErrors
{
    /// <summary>
    /// Contains information about discrepancies found for intents between the test set and the bot.
    /// </summary>
    [JsonPropertyName("intentDiscrepancies")]
    public required IReadOnlyList<TestSetIntentDiscrepancyItem> IntentDiscrepancies { get; init; }

    /// <summary>
    /// Contains information about discrepancies found for slots between the test set and the bot.
    /// </summary>
    [JsonPropertyName("slotDiscrepancies")]
    public required IReadOnlyList<TestSetSlotDiscrepancyItem> SlotDiscrepancies { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
