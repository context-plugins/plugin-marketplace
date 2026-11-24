using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeVirtualGateways operation.
/// </summary>
public sealed record DescribeVirtualGatewaysRequest
{
    public required XAmzTarget56 XAmzTarget { get; init; }
}
