using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StopKeyPhrasesDetectionJob operation.
/// </summary>
public sealed record StopKeyPhrasesDetectionJobOperationRequest
{
    public required XAmzTarget59 XAmzTarget { get; init; }
}
