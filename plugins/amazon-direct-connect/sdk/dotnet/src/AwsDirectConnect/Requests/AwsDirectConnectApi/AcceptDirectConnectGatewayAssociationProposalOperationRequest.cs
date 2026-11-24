using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the AcceptDirectConnectGatewayAssociationProposal operation.
/// </summary>
public sealed record AcceptDirectConnectGatewayAssociationProposalOperationRequest
{
    public required XAmzTarget XAmzTarget { get; init; }
}
