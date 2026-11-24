using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record TestSetSlotDiscrepancyItem
{
    /// <summary>
    /// The name of the intent associated with the slot in the discrepancy report.
    /// </summary>
    [JsonPropertyName("intentName")]
    public required string IntentName { get; init; }

    /// <summary>
    /// The name of the slot in the discrepancy report.
    /// </summary>
    [JsonPropertyName("slotName")]
    public required string SlotName { get; init; }

    /// <summary>
    /// The error message for a discrepancy for an intent between the test set and the bot.
    /// </summary>
    [JsonPropertyName("errorMessage")]
    public required string ErrorMessage { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
