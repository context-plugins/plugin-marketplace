using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribeEventsDetectionJob operation.
/// </summary>
public sealed record DescribeEventsDetectionJobOperationRequest
{
    public required XAmzTarget50 XAmzTarget { get; init; }
}
