using AmazonComprehend.Models.Enums;

namespace AmazonComprehend.Requests.AmazonComprehendApi;

/// <summary>
/// The inputs of the DescribeDominantLanguageDetectionJob operation.
/// </summary>
public sealed record DescribeDominantLanguageDetectionJobOperationRequest
{
    public required XAmzTarget42 XAmzTarget { get; init; }
}
