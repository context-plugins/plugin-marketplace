using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DeleteVolume operation.
/// </summary>
public sealed record DeleteVolumeRequest
{
    public required XAmzTarget21 XAmzTarget { get; init; }
}
