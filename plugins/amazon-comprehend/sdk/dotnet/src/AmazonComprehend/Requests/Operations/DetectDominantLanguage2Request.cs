using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.Operations;

/// <summary>
/// The inputs of the DetectDominantLanguage2 operation.
/// </summary>
public sealed record DetectDominantLanguage2Request
{
    public required XAmzTarget2AmazonComprehendOperationsApi XAmzTarget { get; init; }
}
