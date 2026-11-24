using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the UpdateNfsFileShare operation.
/// </summary>
public sealed record UpdateNfsFileShareRequest
{
    public required XAmzTarget28 XAmzTarget { get; init; }
}
