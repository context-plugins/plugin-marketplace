using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeWorkingStorage operation.
/// </summary>
public sealed record DescribeWorkingStorageRequest
{
    public required XAmzTarget17 XAmzTarget { get; init; }
}
