using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StartKeyPhrasesDetectionJob operation.
/// </summary>
public sealed record StartKeyPhrasesDetectionJobOperationRequest
{
    public required XAmzTarget58 XAmzTarget { get; init; }
}
