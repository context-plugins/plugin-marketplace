using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DetectSentiment operation.
/// </summary>
public sealed record DetectSentimentOperationRequest
{
    public required XAmzTarget12 XAmzTarget { get; init; }
}
