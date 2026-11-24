using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeStorediScsiVolumes operation.
/// </summary>
public sealed record DescribeStorediScsiVolumesRequest
{
    public required XAmzTarget35 XAmzTarget { get; init; }
}
