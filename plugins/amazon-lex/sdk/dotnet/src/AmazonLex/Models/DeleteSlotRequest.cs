using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DeleteSlotRequest
{
    /// <summary>
    /// The identifier of the slot to delete.
    /// </summary>
    [JsonPropertyName("slotId")]
    public required string SlotId { get; init; }

    /// <summary>
    /// The identifier of the bot associated with the slot to delete.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The version of the bot associated with the slot to delete.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale that the slot will be deleted from. The string must match one of the supported locales. For more information, see Supported languages.
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    /// <summary>
    /// The identifier of the intent associated with the slot.
    /// </summary>
    [JsonPropertyName("intentId")]
    public required string IntentId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
