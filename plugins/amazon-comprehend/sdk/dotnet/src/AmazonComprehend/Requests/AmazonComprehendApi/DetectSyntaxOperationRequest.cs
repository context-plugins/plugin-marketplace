using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DetectSyntax operation.
/// </summary>
public sealed record DetectSyntaxOperationRequest
{
    public required XAmzTarget13 XAmzTarget { get; init; }
}
