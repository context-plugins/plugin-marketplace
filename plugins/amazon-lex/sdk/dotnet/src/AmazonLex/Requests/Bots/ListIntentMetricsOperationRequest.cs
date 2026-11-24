using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListIntentMetrics operation.
/// </summary>
public sealed record ListIntentMetricsOperationRequest
{
    public required string BotId { get; init; }

    public ListIntentMetricsRequest? Body { get; init; }
}
