using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListRecommendedIntents operation.
/// </summary>
public sealed record ListRecommendedIntentsOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public required string BotRecommendationId { get; init; }

    public ListRecommendedIntentsRequest? Body { get; init; }
}
