using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListTopicsDetectionJobs operation.
/// </summary>
public sealed record ListTopicsDetectionJobsOperationRequest
{
    public required XAmzTarget73 XAmzTarget { get; init; }
}
