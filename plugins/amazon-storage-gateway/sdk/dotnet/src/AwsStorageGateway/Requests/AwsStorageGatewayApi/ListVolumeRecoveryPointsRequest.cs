using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the ListVolumeRecoveryPoints operation.
/// </summary>
public sealed record ListVolumeRecoveryPointsRequest
{
    public required XAmzTarget78 XAmzTarget { get; init; }
}
