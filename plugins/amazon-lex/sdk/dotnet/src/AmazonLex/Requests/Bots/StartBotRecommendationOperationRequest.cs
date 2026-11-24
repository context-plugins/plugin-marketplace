using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the StartBotRecommendation operation.
/// </summary>
public sealed record StartBotRecommendationOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public StartBotRecommendationRequest? Body { get; init; }
}
