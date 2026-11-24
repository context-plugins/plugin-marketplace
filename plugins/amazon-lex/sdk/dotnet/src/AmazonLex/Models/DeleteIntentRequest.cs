using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DeleteIntentRequest
{
    /// <summary>
    /// The unique identifier of the intent to delete.
    /// </summary>
    [JsonPropertyName("intentId")]
    public required string IntentId { get; init; }

    /// <summary>
    /// The identifier of the bot associated with the intent.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The version of the bot associated with the intent.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale where the bot will be deleted. The string must match one of the supported locales. For more information, see Supported languages.
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
