using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the RefreshCache operation.
/// </summary>
public sealed record RefreshCacheRequest
{
    public required XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi XAmzTarget { get; init; }
}
