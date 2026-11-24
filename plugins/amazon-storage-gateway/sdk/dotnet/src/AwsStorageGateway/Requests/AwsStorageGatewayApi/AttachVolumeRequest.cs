using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the AttachVolume operation.
/// </summary>
public sealed record AttachVolumeRequest
{
    public required XAmzTarget20 XAmzTarget { get; init; }
}
