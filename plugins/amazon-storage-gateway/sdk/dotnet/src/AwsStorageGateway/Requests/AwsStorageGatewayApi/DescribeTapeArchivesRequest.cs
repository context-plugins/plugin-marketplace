using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.AwsStorageGatewayApi;

/// <summary>
/// The inputs of the DescribeTapeArchives operation.
/// </summary>
public sealed record DescribeTapeArchivesRequest
{
    public required XAmzTarget62 XAmzTarget { get; init; }
}
