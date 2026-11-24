using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the CreateDirectConnectGatewayAssociationProposal operation.
/// </summary>
public sealed record CreateDirectConnectGatewayAssociationProposalOperationRequest
{
    public required XAmzTarget1 XAmzTarget { get; init; }
}
