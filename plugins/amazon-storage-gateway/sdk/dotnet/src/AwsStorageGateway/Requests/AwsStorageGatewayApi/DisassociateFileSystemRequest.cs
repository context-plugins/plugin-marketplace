using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DisassociateFileSystem operation.
/// </summary>
public sealed record DisassociateFileSystemRequest
{
    public required XAmzTarget19 XAmzTarget { get; init; }
}
