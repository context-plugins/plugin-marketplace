using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AmazonStorageGatewayRestApi;

/// <summary>
/// The inputs of the ListVolumes operation.
/// </summary>
public sealed record ListVolumesRequest
{
    public required XAmzTarget1 XAmzTarget { get; init; }
}
