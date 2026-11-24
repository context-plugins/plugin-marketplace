using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the ResetCache operation.
/// </summary>
public sealed record ResetCacheRequest
{
    public required XAmzTarget10 XAmzTarget { get; init; }
}
