using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the CreateDirectConnectGateway operation.
/// </summary>
public sealed record CreateDirectConnectGatewayOperationRequest
{
    public required XAmzTarget30 XAmzTarget { get; init; }
}
