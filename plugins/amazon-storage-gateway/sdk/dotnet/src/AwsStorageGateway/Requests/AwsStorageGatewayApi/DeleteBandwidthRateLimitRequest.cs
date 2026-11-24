using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DeleteBandwidthRateLimit operation.
/// </summary>
public sealed record DeleteBandwidthRateLimitRequest
{
    public required XAmzTarget47 XAmzTarget { get; init; }
}
