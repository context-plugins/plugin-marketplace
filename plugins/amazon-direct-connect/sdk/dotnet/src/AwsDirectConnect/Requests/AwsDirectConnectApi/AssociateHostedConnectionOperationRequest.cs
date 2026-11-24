using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the AssociateHostedConnection operation.
/// </summary>
public sealed record AssociateHostedConnectionOperationRequest
{
    public required XAmzTarget21 XAmzTarget { get; init; }
}
