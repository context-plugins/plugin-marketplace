using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DeleteTape operation.
/// </summary>
public sealed record DeleteTapeRequest
{
    public required XAmzTarget41 XAmzTarget { get; init; }
}
