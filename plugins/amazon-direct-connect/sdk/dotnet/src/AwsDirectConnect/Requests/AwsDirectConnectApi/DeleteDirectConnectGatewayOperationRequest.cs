using AwsDirectConnect.Models.Enums;

namespace AwsDirectConnect.Requests.AwsDirectConnectApi;

/// <summary>
/// The inputs of the DeleteDirectConnectGateway operation.
/// </summary>
public sealed record DeleteDirectConnectGatewayOperationRequest
{
    public required XAmzTarget31 XAmzTarget { get; init; }
}
