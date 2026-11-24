using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the StopBotRecommendation operation.
/// </summary>
public sealed record StopBotRecommendationOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public required string BotRecommendationId { get; init; }

    public StopBotRecommendationRequest? Body { get; init; }
}
