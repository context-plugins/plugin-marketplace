using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribeKeyPhrasesDetectionJob operation.
/// </summary>
public sealed record DescribeKeyPhrasesDetectionJobOperationRequest
{
    public required XAmzTarget56 XAmzTarget { get; init; }
}
