using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeCache operation.
/// </summary>
public sealed record DescribeCacheRequest
{
    public required XAmzTarget9 XAmzTarget { get; init; }
}
