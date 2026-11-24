using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.Operations;

/// <summary>
/// The inputs of the ShutdownGateway2 operation.
/// </summary>
public sealed record ShutdownGateway2Request
{
    public required XAmzTarget8AwsStorageGatewayOperationsApi XAmzTarget { get; init; }
}
