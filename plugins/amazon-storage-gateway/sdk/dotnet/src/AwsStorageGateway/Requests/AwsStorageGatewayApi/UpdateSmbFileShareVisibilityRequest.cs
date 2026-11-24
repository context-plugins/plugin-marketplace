using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the UpdateSmbFileShareVisibility operation.
/// </summary>
public sealed record UpdateSmbFileShareVisibilityRequest
{
    public required XAmzTarget82 XAmzTarget { get; init; }
}
