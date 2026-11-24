using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.Operations;

/// <summary>
/// The inputs of the DisassociateConnectionsFromResiliencyGroup operation.
/// </summary>
public sealed record DisassociateConnectionsFromResiliencyGroupOperationRequest
{
    public required XAmzTarget11AwsDirectConnectOperationsApi XAmzTarget { get; init; }
}
