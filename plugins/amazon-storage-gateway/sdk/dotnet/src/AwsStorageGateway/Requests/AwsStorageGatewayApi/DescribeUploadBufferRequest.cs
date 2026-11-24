using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeUploadBuffer operation.
/// </summary>
public sealed record DescribeUploadBufferRequest
{
    public required XAmzTarget15 XAmzTarget { get; init; }
}
