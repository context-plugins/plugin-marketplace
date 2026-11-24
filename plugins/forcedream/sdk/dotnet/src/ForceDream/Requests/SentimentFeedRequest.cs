using ForceDream.Models;

namespace ForceDream.Requests;

/// <summary>
/// The inputs of the SentimentFeed operation.
/// </summary>
public sealed record SentimentFeedRequest
{
    public string? XPaymentIntentId { get; init; }

    public V1OracleSentimentFeedRequest? Body { get; init; }
}
