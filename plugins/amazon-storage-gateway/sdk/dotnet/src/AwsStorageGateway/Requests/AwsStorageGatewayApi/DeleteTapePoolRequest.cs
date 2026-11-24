using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DeleteTapePool operation.
/// </summary>
public sealed record DeleteTapePoolRequest
{
    public required XAmzTarget37 XAmzTarget { get; init; }
}
