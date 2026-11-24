using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the CreateSnapshotFromVolumeRecoveryPoint operation.
/// </summary>
public sealed record CreateSnapshotFromVolumeRecoveryPointRequest
{
    public required XAmzTarget33 XAmzTarget { get; init; }
}
