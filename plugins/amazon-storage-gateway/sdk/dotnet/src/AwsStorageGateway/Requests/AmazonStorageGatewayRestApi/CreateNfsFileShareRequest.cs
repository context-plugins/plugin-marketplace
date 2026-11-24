using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AmazonStorageGatewayRestApi;

/// <summary>
/// The inputs of the CreateNfsFileShare operation.
/// </summary>
public sealed record CreateNfsFileShareRequest
{
    public required XAmzTarget2 XAmzTarget { get; init; }
}
