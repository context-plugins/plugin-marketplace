using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeBandwidthRateLimitSchedule operation.
/// </summary>
public sealed record DescribeBandwidthRateLimitScheduleRequest
{
    public required XAmzTarget65 XAmzTarget { get; init; }
}
