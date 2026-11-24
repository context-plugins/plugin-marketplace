using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeVtlDevices operation.
/// </summary>
public sealed record DescribeVtlDevicesRequest
{
    public required XAmzTarget75 XAmzTarget { get; init; }
}
