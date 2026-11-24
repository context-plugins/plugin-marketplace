using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the DeleteBotAnalyzerRecommendation operation.
/// </summary>
public sealed record DeleteBotAnalyzerRecommendationOperationRequest
{
    public required string BotId { get; init; }

    public required string BotAnalyzerRequestId { get; init; }

    public DeleteBotAnalyzerRecommendationRequest? Body { get; init; }
}
