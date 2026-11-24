using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeAvailabilityMonitorTest operation.
/// </summary>
public sealed record DescribeAvailabilityMonitorTestRequest
{
    public required XAmzTarget63 XAmzTarget { get; init; }
}
