using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.CacheReport;

/// <summary>
/// The inputs of the DescribeCacheReport operation.
/// </summary>
public sealed record DescribeCacheReportRequest
{
    public required XAmzTarget2AwsStorageGatewayCacheReportApi XAmzTarget { get; init; }
}
