using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the CreateStorediScsiVolume operation.
/// </summary>
public sealed record CreateStorediScsiVolumeRequest
{
    public required XAmzTarget34 XAmzTarget { get; init; }
}
