using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribeTargetedSentimentDetectionJob operation.
/// </summary>
public sealed record DescribeTargetedSentimentDetectionJobOperationRequest
{
    public required XAmzTarget68 XAmzTarget { get; init; }
}
