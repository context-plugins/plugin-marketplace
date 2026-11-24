using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListSentimentDetectionJobs operation.
/// </summary>
public sealed record ListSentimentDetectionJobsOperationRequest
{
    public required XAmzTarget65 XAmzTarget { get; init; }
}
