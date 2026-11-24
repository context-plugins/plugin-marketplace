using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record UpdateBotRecommendationRequest
{
    /// <summary>
    /// The unique identifier of the bot containing the bot recommendation to be updated.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The version of the bot containing the bot recommendation to be updated.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale of the bot recommendation to update. The string must match one of the supported locales. For more information, see Supported languages
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    /// <summary>
    /// The unique identifier of the bot recommendation to be updated.
    /// </summary>
    [JsonPropertyName("botRecommendationId")]
    public required string BotRecommendationId { get; init; }

    [JsonPropertyName("encryptionSetting")]
    public required EncryptionSetting EncryptionSetting { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
