using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record StartBotRecommendationRequest
{
    /// <summary>
    /// The unique identifier of the bot containing the bot recommendation.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The version of the bot containing the bot recommendation.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The identifier of the language and locale of the bot recommendation to start. The string must match one of the supported locales. For more information, see Supported languages
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    [JsonPropertyName("transcriptSourceSetting")]
    public required TranscriptSourceSetting TranscriptSourceSetting { get; init; }

    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("encryptionSetting")]
    public EncryptionSetting? EncryptionSetting { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
