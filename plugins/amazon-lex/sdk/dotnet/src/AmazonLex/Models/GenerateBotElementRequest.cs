using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record GenerateBotElementRequest
{
    /// <summary>
    /// The intent unique Id for the bot request to generate utterances.
    /// </summary>
    [JsonPropertyName("intentId")]
    public required string IntentId { get; init; }

    /// <summary>
    /// The bot unique Id for the bot request to generate utterances.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The bot version for the bot request to generate utterances.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The unique locale Id for the bot request to generate utterances.
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
