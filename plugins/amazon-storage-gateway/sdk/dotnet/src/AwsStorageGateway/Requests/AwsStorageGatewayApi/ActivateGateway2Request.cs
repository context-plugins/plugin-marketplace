using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the ActivateGateway2 operation.
/// </summary>
public sealed record ActivateGateway2Request
{
    public required XAmzTarget XAmzTarget { get; init; }
}
