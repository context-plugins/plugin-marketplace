using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListSessionMetrics operation.
/// </summary>
public sealed record ListSessionMetricsOperationRequest
{
    public required string BotId { get; init; }

    public ListSessionMetricsRequest? Body { get; init; }
}
