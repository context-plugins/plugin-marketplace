using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the UpdateDirectConnectGatewayAssociation operation.
/// </summary>
public sealed record UpdateDirectConnectGatewayAssociationOperationRequest
{
    public required XAmzTarget37 XAmzTarget { get; init; }
}
