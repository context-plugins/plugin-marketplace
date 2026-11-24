using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.Operations;

/// <summary>
/// The inputs of the DetectEntities2 operation.
/// </summary>
public sealed record DetectEntities2Request
{
    public required XAmzTarget3AmazonComprehendOperationsApi XAmzTarget { get; init; }
}
