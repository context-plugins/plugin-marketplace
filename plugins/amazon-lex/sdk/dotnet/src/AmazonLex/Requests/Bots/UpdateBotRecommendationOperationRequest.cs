using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the UpdateBotRecommendation operation.
/// </summary>
public sealed record UpdateBotRecommendationOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public required string BotRecommendationId { get; init; }

    public UpdateBotRecommendationRequest? Body { get; init; }
}
