using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListAggregatedUtterances operation.
/// </summary>
public sealed record ListAggregatedUtterancesOperationRequest
{
    public required string BotId { get; init; }

    public ListAggregatedUtterancesRequest? Body { get; init; }
}
