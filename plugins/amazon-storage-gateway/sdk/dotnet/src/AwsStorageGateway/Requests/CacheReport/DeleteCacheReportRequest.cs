using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.CacheReport;

/// <summary>
/// The inputs of the DeleteCacheReport operation.
/// </summary>
public sealed record DeleteCacheReportRequest
{
    public required XAmzTarget1AwsStorageGatewayCacheReportApi XAmzTarget { get; init; }
}
