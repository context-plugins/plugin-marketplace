using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the ListFileSystemAssociations operation.
/// </summary>
public sealed record ListFileSystemAssociationsRequest
{
    public required XAmzTarget68 XAmzTarget { get; init; }
}
