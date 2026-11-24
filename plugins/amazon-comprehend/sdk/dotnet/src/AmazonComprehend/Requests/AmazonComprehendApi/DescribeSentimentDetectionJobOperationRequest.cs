using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribeSentimentDetectionJob operation.
/// </summary>
public sealed record DescribeSentimentDetectionJobOperationRequest
{
    public required XAmzTarget64 XAmzTarget { get; init; }
}
