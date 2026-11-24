using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.Operations;

/// <summary>
/// The inputs of the ContainsPiiEntities2 operation.
/// </summary>
public sealed record ContainsPiiEntities2Request
{
    public required XAmzTarget1AmazonComprehendOperationsApi XAmzTarget { get; init; }
}
