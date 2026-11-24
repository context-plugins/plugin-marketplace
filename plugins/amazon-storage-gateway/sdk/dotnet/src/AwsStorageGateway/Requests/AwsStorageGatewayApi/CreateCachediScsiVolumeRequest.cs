using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the CreateCachediScsiVolume operation.
/// </summary>
public sealed record CreateCachediScsiVolumeRequest
{
    public required XAmzTarget25 XAmzTarget { get; init; }
}
