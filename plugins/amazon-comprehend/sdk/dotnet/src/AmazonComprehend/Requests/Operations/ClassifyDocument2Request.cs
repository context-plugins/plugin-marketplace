using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.Operations;

/// <summary>
/// The inputs of the ClassifyDocument2 operation.
/// </summary>
public sealed record ClassifyDocument2Request
{
    public required XAmzTargetAmazonComprehendOperationsApi XAmzTarget { get; init; }
}
