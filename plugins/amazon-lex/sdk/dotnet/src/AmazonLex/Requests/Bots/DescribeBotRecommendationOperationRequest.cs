namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DescribeBotRecommendation operation.
/// </summary>
public sealed record DescribeBotRecommendationOperationRequest
{
    public required string BotId { get; init; }

    public required string BotVersion { get; init; }

    public required string LocaleId { get; init; }

    public required string BotRecommendationId { get; init; }
}
