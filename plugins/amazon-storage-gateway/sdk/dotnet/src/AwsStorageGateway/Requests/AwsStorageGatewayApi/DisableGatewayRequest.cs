using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DisableGateway operation.
/// </summary>
public sealed record DisableGatewayRequest
{
    public required XAmzTarget56 XAmzTarget { get; init; }
}
