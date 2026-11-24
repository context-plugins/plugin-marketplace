using AmazonLex.Models;

namespace AmazonLex.Requests.Bots;

/// <summary>
/// The inputs of the ListSessionAnalyticsData operation.
/// </summary>
public sealed record ListSessionAnalyticsDataOperationRequest
{
    public required string BotId { get; init; }

    public ListSessionAnalyticsDataRequest? Body { get; init; }
}
