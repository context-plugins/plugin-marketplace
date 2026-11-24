using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribeEntitiesDetectionJob operation.
/// </summary>
public sealed record DescribeEntitiesDetectionJobOperationRequest
{
    public required XAmzTarget46 XAmzTarget { get; init; }
}
