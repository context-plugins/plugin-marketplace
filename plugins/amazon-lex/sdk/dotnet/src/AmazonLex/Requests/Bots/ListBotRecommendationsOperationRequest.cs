using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListBotRecommendations operation.
/// </summary>
public sealed record ListBotRecommendationsOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public ListBotRecommendationsRequest? Body { get; init; }
}
