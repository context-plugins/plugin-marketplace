using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the CreateSmbFileShare operation.
/// </summary>
public sealed record CreateSmbFileShareRequest
{
    public required XAmzTarget29 XAmzTarget { get; init; }
}
