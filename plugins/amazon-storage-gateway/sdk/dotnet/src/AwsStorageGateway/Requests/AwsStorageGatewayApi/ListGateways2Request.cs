using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the ListGateways2 operation.
/// </summary>
public sealed record ListGateways2Request
{
    public required XAmzTarget3 XAmzTarget { get; init; }
}
