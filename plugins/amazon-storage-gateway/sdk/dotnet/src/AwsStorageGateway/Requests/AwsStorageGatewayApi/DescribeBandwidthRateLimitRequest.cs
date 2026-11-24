using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeBandwidthRateLimit operation.
/// </summary>
public sealed record DescribeBandwidthRateLimitRequest
{
    public required XAmzTarget48 XAmzTarget { get; init; }
}
