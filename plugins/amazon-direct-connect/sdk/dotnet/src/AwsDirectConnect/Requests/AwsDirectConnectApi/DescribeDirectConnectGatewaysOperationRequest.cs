using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeDirectConnectGateways operation.
/// </summary>
public sealed record DescribeDirectConnectGatewaysOperationRequest
{
    public required XAmzTarget32 XAmzTarget { get; init; }
}
