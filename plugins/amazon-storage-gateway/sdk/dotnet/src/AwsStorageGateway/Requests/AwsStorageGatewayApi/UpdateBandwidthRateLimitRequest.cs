using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the UpdateBandwidthRateLimit operation.
/// </summary>
public sealed record UpdateBandwidthRateLimitRequest
{
    public required XAmzTarget49 XAmzTarget { get; init; }
}
