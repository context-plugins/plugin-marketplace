using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the ShutdownGateway operation.
/// </summary>
public sealed record ShutdownGatewayRequest
{
    public required XAmzTarget7 XAmzTarget { get; init; }
}
