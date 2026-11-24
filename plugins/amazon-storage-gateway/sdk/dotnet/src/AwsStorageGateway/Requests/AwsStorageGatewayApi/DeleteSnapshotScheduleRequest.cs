using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DeleteSnapshotSchedule operation.
/// </summary>
public sealed record DeleteSnapshotScheduleRequest
{
    public required XAmzTarget58 XAmzTarget { get; init; }
}
