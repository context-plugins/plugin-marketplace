using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribeTopicsDetectionJob operation.
/// </summary>
public sealed record DescribeTopicsDetectionJobOperationRequest
{
    public required XAmzTarget72 XAmzTarget { get; init; }
}
