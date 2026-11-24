using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeGatewayInformation2 operation.
/// </summary>
public sealed record DescribeGatewayInformation2Request
{
    public required XAmzTarget4 XAmzTarget { get; init; }
}
