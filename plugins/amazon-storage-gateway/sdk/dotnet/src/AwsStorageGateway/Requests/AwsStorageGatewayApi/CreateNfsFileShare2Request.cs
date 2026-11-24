using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the CreateNfsFileShare2 operation.
/// </summary>
public sealed record CreateNfsFileShare2Request
{
    public required XAmzTarget2 XAmzTarget { get; init; }
}
