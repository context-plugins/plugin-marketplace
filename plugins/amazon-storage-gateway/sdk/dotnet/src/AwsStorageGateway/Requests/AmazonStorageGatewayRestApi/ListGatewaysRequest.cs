using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AmazonStorageGatewayRestApi;

/// <summary>
/// The inputs of the ListGateways operation.
/// </summary>
public sealed record ListGatewaysRequest
{
    public required XAmzTarget3 XAmzTarget { get; init; }
}
