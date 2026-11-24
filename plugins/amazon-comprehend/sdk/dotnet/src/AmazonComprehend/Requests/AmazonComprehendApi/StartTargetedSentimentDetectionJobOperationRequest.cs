using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StartTargetedSentimentDetectionJob operation.
/// </summary>
public sealed record StartTargetedSentimentDetectionJobOperationRequest
{
    public required XAmzTarget70 XAmzTarget { get; init; }
}
