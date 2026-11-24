using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListPiiEntitiesDetectionJobs operation.
/// </summary>
public sealed record ListPiiEntitiesDetectionJobsOperationRequest
{
    public required XAmzTarget61 XAmzTarget { get; init; }
}
