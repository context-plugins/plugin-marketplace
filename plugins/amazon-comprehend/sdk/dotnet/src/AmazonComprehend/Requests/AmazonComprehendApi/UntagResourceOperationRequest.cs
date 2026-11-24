using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the UntagResource operation.
/// </summary>
public sealed record UntagResourceOperationRequest
{
    public required XAmzTarget83 XAmzTarget { get; init; }
}
