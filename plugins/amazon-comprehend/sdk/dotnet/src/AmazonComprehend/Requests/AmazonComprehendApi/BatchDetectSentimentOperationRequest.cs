using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the BatchDetectSentiment operation.
/// </summary>
public sealed record BatchDetectSentimentOperationRequest
{
    public required XAmzTarget3 XAmzTarget { get; init; }
}
