using System.Text.Json.Serialization;
using AmazonLex.Core.Models;

namespace AmazonLex.Models;

public record DeleteBotAnalyzerRecommendationRequest
{
    /// <summary>
    /// The unique identifier of the bot.
    /// </summary>
    [JsonPropertyName("botId")]
    public required string BotId { get; init; }

    /// <summary>
    /// The unique identifier of the analysis request whose recommendations should be deleted.
    /// </summary>
    [JsonPropertyName("botAnalyzerRequestId")]
    public required string BotAnalyzerRequestId { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
