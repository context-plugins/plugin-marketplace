using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListKeyPhrasesDetectionJobs operation.
/// </summary>
public sealed record ListKeyPhrasesDetectionJobsOperationRequest
{
    public required XAmzTarget57 XAmzTarget { get; init; }
}
