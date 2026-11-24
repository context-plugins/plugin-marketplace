using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListUtteranceMetrics operation.
/// </summary>
public sealed record ListUtteranceMetricsOperationRequest
{
    public required string BotId { get; init; }

    public ListUtteranceMetricsRequest? Body { get; init; }
}
