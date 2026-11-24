using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the AllocateHostedConnection operation.
/// </summary>
public sealed record AllocateHostedConnectionOperationRequest
{
    public required XAmzTarget5 XAmzTarget { get; init; }
}
