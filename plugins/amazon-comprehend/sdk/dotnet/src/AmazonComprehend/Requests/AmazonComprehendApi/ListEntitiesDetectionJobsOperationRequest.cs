using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListEntitiesDetectionJobs operation.
/// </summary>
public sealed record ListEntitiesDetectionJobsOperationRequest
{
    public required XAmzTarget47 XAmzTarget { get; init; }
}
