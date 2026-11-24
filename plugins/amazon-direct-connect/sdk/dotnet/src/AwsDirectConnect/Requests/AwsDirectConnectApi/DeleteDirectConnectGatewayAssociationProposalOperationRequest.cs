using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DeleteDirectConnectGatewayAssociationProposal operation.
/// </summary>
public sealed record DeleteDirectConnectGatewayAssociationProposalOperationRequest
{
    public required XAmzTarget2 XAmzTarget { get; init; }
}
