using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the UpdateSnapshotSchedule operation.
/// </summary>
public sealed record UpdateSnapshotScheduleRequest
{
    public required XAmzTarget60 XAmzTarget { get; init; }
}
