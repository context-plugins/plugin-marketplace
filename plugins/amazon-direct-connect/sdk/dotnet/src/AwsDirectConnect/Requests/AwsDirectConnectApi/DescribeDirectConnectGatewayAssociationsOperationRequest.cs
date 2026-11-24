using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeDirectConnectGatewayAssociations operation.
/// </summary>
public sealed record DescribeDirectConnectGatewayAssociationsOperationRequest
{
    public required XAmzTarget36 XAmzTarget { get; init; }
}
