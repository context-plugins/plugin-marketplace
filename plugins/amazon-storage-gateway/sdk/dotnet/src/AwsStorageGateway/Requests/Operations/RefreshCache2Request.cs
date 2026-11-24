using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.Operations;

/// <summary>
/// The inputs of the RefreshCache2 operation.
/// </summary>
public sealed record RefreshCache2Request
{
    public required XAmzTarget5AwsStorageGatewayOperationsApi XAmzTarget { get; init; }
}
