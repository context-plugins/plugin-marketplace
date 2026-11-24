using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeMaintenanceStartTime operation.
/// </summary>
public sealed record DescribeMaintenanceStartTimeRequest
{
    public required XAmzTarget71 XAmzTarget { get; init; }
}
