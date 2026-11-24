using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the PutResourcePolicy operation.
/// </summary>
public sealed record PutResourcePolicyOperationRequest
{
    public required XAmzTarget38 XAmzTarget { get; init; }
}
