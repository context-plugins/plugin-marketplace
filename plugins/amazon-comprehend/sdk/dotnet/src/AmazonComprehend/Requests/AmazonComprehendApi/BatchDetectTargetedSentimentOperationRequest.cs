using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the BatchDetectTargetedSentiment operation.
/// </summary>
public sealed record BatchDetectTargetedSentimentOperationRequest
{
    public required XAmzTarget5 XAmzTarget { get; init; }
}
