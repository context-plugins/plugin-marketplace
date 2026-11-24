using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DisassociateConnectionFromLag operation.
/// </summary>
public sealed record DisassociateConnectionFromLagOperationRequest
{
    public required XAmzTarget19 XAmzTarget { get; init; }
}
