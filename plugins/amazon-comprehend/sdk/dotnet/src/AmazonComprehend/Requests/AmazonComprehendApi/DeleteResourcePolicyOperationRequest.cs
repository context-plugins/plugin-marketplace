using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DeleteResourcePolicy operation.
/// </summary>
public sealed record DeleteResourcePolicyOperationRequest
{
    public required XAmzTarget36 XAmzTarget { get; init; }
}
