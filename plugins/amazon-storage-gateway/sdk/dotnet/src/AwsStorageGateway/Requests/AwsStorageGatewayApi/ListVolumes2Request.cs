using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the ListVolumes2 operation.
/// </summary>
public sealed record ListVolumes2Request
{
    public required XAmzTarget1 XAmzTarget { get; init; }
}
