using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DeleteDirectConnectGatewayAssociation operation.
/// </summary>
public sealed record DeleteDirectConnectGatewayAssociationOperationRequest
{
    public required XAmzTarget35 XAmzTarget { get; init; }
}
