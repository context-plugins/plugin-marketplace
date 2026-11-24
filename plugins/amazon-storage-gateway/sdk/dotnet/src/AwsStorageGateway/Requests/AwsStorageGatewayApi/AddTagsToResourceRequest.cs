using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the AddTagsToResource operation.
/// </summary>
public sealed record AddTagsToResourceRequest
{
    public required XAmzTarget11 XAmzTarget { get; init; }
}
