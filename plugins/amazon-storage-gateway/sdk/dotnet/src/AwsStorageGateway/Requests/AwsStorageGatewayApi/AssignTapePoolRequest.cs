using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the AssignTapePool operation.
/// </summary>
public sealed record AssignTapePoolRequest
{
    public required XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi XAmzTarget { get; init; }
}
