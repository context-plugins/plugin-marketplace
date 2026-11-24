using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the UpdateDirectConnectGateway operation.
/// </summary>
public sealed record UpdateDirectConnectGatewayOperationRequest
{
    public required XAmzTarget33 XAmzTarget { get; init; }
}
