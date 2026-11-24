using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the RemoveTagsFromResource operation.
/// </summary>
public sealed record RemoveTagsFromResourceRequest
{
    public required XAmzTarget13 XAmzTarget { get; init; }
}
