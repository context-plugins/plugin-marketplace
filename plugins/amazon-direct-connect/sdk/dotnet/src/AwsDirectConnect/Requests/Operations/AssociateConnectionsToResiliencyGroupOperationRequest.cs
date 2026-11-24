using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.Operations;

/// <summary>
/// The inputs of the AssociateConnectionsToResiliencyGroup operation.
/// </summary>
public sealed record AssociateConnectionsToResiliencyGroupOperationRequest
{
    public required XAmzTarget10AwsDirectConnectOperationsApi XAmzTarget { get; init; }
}
