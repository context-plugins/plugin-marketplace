using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.Operations;

/// <summary>
/// The inputs of the DetectTargetedSentiment2 operation.
/// </summary>
public sealed record DetectTargetedSentiment2Request
{
    public required XAmzTarget8AmazonComprehendOperationsApi XAmzTarget { get; init; }
}
