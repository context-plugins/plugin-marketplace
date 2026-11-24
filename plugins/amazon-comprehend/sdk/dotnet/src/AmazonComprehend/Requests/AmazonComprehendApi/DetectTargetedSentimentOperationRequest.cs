using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DetectTargetedSentiment operation.
/// </summary>
public sealed record DetectTargetedSentimentOperationRequest
{
    public required XAmzTarget14 XAmzTarget { get; init; }
}
