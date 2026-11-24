using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DescribeSlotRequest
{
    /// <summary>
    /// The unique identifier for the slot.
    /// </summary>
    [JsonPropertyName("slotId")]
    public required string SlotId { get; init; }

    /// <summary>
    /// The identifier of the bot associated with the slot.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The version of the bot associated with the slot.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale of the slot to describe. The string must match one of the supported locales. For more information, see Supported languages.
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    /// <summary>
    /// The identifier of the intent that contains the slot.
    /// </summary>
    [JsonPropertyName("intentId")]
    public required string IntentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
