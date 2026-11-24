using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the StartSentimentDetectionJob operation.
/// </summary>
public sealed record StartSentimentDetectionJobOperationRequest
{
    public required XAmzTarget66 XAmzTarget { get; init; }
}
