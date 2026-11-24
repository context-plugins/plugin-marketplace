using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DetachVolume operation.
/// </summary>
public sealed record DetachVolumeRequest
{
    public required XAmzTarget22 XAmzTarget { get; init; }
}
