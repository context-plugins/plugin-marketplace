using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the BatchDetectSyntax operation.
/// </summary>
public sealed record BatchDetectSyntaxOperationRequest
{
    public required XAmzTarget4 XAmzTarget { get; init; }
}
