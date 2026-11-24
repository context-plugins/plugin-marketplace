using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.Operations;

/// <summary>
/// The inputs of the DetectSentiment2 operation.
/// </summary>
public sealed record DetectSentiment2Request
{
    public required XAmzTarget6AmazonComprehendOperationsApi XAmzTarget { get; init; }
}
