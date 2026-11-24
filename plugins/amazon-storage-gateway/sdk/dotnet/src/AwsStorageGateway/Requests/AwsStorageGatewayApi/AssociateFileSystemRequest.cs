using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the AssociateFileSystem operation.
/// </summary>
public sealed record AssociateFileSystemRequest
{
    public required XAmzTarget18 XAmzTarget { get; init; }
}
