using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.Operations;

/// <summary>
/// The inputs of the DetectToxicContent operation.
/// </summary>
public sealed record DetectToxicContentOperationRequest
{
    public required XAmzTarget9AmazonComprehendOperationsApi XAmzTarget { get; init; }
}
