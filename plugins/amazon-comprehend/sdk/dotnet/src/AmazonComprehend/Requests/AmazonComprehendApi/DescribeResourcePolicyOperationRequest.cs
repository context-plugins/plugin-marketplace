using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribeResourcePolicy operation.
/// </summary>
public sealed record DescribeResourcePolicyOperationRequest
{
    public required XAmzTarget37 XAmzTarget { get; init; }
}
