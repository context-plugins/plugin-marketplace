using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StartDominantLanguageDetectionJob operation.
/// </summary>
public sealed record StartDominantLanguageDetectionJobOperationRequest
{
    public required XAmzTarget44 XAmzTarget { get; init; }
}
