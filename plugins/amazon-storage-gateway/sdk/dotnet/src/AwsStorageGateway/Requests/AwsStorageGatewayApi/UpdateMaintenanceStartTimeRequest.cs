using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the UpdateMaintenanceStartTime operation.
/// </summary>
public sealed record UpdateMaintenanceStartTimeRequest
{
    public required XAmzTarget72 XAmzTarget { get; init; }
}
