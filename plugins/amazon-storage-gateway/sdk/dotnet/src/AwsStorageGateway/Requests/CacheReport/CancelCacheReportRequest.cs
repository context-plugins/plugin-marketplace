using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.CacheReport;

/// <summary>
/// The inputs of the CancelCacheReport operation.
/// </summary>
public sealed record CancelCacheReportRequest
{
    public required XAmzTargetAwsStorageGatewayCacheReportApi XAmzTarget { get; init; }
}
