using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the UpdateBandwidthRateLimitSchedule operation.
/// </summary>
public sealed record UpdateBandwidthRateLimitScheduleRequest
{
    public required XAmzTarget66 XAmzTarget { get; init; }
}
