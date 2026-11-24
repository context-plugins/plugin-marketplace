using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the UpdateSmbFileShare operation.
/// </summary>
public sealed record UpdateSmbFileShareRequest
{
    public required XAmzTarget31 XAmzTarget { get; init; }
}
