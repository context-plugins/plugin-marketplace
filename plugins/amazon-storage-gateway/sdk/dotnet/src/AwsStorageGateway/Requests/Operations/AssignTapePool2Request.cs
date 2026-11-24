using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.Operations;

/// <summary>
/// The inputs of the AssignTapePool2 operation.
/// </summary>
public sealed record AssignTapePool2Request
{
    public required XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi XAmzTarget { get; init; }
}
