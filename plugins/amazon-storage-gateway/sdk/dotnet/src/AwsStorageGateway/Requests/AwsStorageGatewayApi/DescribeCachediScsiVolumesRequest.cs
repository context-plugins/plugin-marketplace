using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeCachediScsiVolumes operation.
/// </summary>
public sealed record DescribeCachediScsiVolumesRequest
{
    public required XAmzTarget26 XAmzTarget { get; init; }
}
