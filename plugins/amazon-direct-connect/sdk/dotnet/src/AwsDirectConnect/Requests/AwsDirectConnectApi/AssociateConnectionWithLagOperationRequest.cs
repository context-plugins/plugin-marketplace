using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the AssociateConnectionWithLag operation.
/// </summary>
public sealed record AssociateConnectionWithLagOperationRequest
{
    public required XAmzTarget14 XAmzTarget { get; init; }
}
