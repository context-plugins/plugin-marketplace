using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DescribeBotAnalyzerRecommendation operation.
/// </summary>
public sealed record DescribeBotAnalyzerRecommendationOperationRequest
{
    public required string BotId { get; init; }

    public required string BotAnalyzerRequestId { get; init; }

    public DescribeBotAnalyzerRecommendationRequest? Body { get; init; }
}
