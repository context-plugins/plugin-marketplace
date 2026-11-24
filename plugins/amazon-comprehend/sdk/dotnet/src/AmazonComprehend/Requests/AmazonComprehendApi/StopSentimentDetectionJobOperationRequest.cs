using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StopSentimentDetectionJob operation.
/// </summary>
public sealed record StopSentimentDetectionJobOperationRequest
{
    public required XAmzTarget67 XAmzTarget { get; init; }
}
