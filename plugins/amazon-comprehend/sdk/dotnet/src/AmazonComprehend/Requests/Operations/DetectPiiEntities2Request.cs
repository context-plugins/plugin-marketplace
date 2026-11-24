using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.Operations;

/// <summary>
/// The inputs of the DetectPiiEntities2 operation.
/// </summary>
public sealed record DetectPiiEntities2Request
{
    public required XAmzTarget5AmazonComprehendOperationsApi XAmzTarget { get; init; }
}
