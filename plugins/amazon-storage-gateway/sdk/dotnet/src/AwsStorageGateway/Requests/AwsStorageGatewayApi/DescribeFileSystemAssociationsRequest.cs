using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeFileSystemAssociations operation.
/// </summary>
public sealed record DescribeFileSystemAssociationsRequest
{
    public required XAmzTarget67 XAmzTarget { get; init; }
}
