using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListTargetedSentimentDetectionJobs operation.
/// </summary>
public sealed record ListTargetedSentimentDetectionJobsOperationRequest
{
    public required XAmzTarget69 XAmzTarget { get; init; }
}
