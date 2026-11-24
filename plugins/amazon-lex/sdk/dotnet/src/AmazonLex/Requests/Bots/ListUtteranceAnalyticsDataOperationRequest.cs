using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListUtteranceAnalyticsData operation.
/// </summary>
public sealed record ListUtteranceAnalyticsDataOperationRequest
{
    public required string BotId { get; init; }

    public ListUtteranceAnalyticsDataRequest? Body { get; init; }
}
