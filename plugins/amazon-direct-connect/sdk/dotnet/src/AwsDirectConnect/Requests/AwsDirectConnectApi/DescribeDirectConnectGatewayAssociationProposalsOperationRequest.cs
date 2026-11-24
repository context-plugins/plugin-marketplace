using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DescribeDirectConnectGatewayAssociationProposals operation.
/// </summary>
public sealed record DescribeDirectConnectGatewayAssociationProposalsOperationRequest
{
    public required XAmzTarget3 XAmzTarget { get; init; }
}
