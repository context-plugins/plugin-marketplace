using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeNfsFileShares operation.
/// </summary>
public sealed record DescribeNfsFileSharesRequest
{
    public required XAmzTarget27 XAmzTarget { get; init; }
}
