using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the StartGateway operation.
/// </summary>
public sealed record StartGatewayRequest
{
    public required XAmzTarget57 XAmzTarget { get; init; }
}
