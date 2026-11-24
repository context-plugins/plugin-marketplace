using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StopDominantLanguageDetectionJob operation.
/// </summary>
public sealed record StopDominantLanguageDetectionJobOperationRequest
{
    public required XAmzTarget45 XAmzTarget { get; init; }
}
