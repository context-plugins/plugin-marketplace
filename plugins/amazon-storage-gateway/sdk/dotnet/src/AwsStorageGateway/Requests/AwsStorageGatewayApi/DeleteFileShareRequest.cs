using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DeleteFileShare operation.
/// </summary>
public sealed record DeleteFileShareRequest
{
    public required XAmzTarget53 XAmzTarget { get; init; }
}
