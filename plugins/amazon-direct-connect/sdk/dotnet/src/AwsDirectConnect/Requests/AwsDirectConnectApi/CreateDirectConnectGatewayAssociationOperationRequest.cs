using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the CreateDirectConnectGatewayAssociation operation.
/// </summary>
public sealed record CreateDirectConnectGatewayAssociationOperationRequest
{
    public required XAmzTarget34 XAmzTarget { get; init; }
}
