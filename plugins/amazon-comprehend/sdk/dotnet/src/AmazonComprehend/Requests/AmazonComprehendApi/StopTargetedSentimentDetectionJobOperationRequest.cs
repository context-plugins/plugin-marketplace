using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StopTargetedSentimentDetectionJob operation.
/// </summary>
public sealed record StopTargetedSentimentDetectionJobOperationRequest
{
    public required XAmzTarget71 XAmzTarget { get; init; }
}
