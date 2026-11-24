using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DeleteGateway operation.
/// </summary>
public sealed record DeleteGatewayRequest
{
    public required XAmzTarget55 XAmzTarget { get; init; }
}
