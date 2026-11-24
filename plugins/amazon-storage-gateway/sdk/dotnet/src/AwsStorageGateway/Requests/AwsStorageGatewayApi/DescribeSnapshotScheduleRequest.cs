using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeSnapshotSchedule operation.
/// </summary>
public sealed record DescribeSnapshotScheduleRequest
{
    public required XAmzTarget59 XAmzTarget { get; init; }
}
