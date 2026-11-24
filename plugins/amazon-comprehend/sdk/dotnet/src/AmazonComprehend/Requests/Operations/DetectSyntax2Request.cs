using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.Operations;

/// <summary>
/// The inputs of the DetectSyntax2 operation.
/// </summary>
public sealed record DetectSyntax2Request
{
    public required XAmzTarget7AmazonComprehendOperationsApi XAmzTarget { get; init; }
}
