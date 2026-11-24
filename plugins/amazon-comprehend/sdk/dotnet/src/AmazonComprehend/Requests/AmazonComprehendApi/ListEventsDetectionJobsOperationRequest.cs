using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListEventsDetectionJobs operation.
/// </summary>
public sealed record ListEventsDetectionJobsOperationRequest
{
    public required XAmzTarget51 XAmzTarget { get; init; }
}
