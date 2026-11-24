using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record StartBotResourceGenerationRequest
{
    /// <summary>
    /// The prompt to generate intents and slot types for the bot locale. Your description should be both detailed and precise to help generate appropriate and sufficient intents for your bot. Include a list of actions to improve the intent creation process.
    /// </summary>
    [JsonPropertyName("generationInputPrompt")]
    public required string GenerationInputPrompt { get; init; }

    /// <summary>
    /// The unique identifier of the bot for which to generate intents and slot types.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The version of the bot for which to generate intents and slot types.
    /// </summary>
    [JsonPropertyName("botVersion")]
    public required string BotVersion { get; init; }

    /// <summary>
    /// The locale of the bot for which to generate intents and slot types.
    /// </summary>
    [JsonPropertyName("localeId")]
    public required string LocaleId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
