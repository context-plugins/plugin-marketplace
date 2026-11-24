using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the ListDominantLanguageDetectionJobs operation.
/// </summary>
public sealed record ListDominantLanguageDetectionJobsOperationRequest
{
    public required XAmzTarget43 XAmzTarget { get; init; }
}
