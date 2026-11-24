using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListIntentStageMetrics operation.
/// </summary>
public sealed record ListIntentStageMetricsOperationRequest
{
    public required string BotId { get; init; }

    public ListIntentStageMetricsRequest? Body { get; init; }
}
