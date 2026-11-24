using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the AddCache operation.
/// </summary>
public sealed record AddCacheRequest
{
    public required XAmzTarget8 XAmzTarget { get; init; }
}
