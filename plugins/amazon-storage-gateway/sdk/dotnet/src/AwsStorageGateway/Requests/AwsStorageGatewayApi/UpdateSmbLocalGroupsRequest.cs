using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the UpdateSmbLocalGroups operation.
/// </summary>
public sealed record UpdateSmbLocalGroupsRequest
{
    public required XAmzTarget83 XAmzTarget { get; init; }
}
