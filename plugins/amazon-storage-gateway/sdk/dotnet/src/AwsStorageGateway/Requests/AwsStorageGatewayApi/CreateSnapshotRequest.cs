using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the CreateSnapshot operation.
/// </summary>
public sealed record CreateSnapshotRequest
{
    public required XAmzTarget32 XAmzTarget { get; init; }
}
