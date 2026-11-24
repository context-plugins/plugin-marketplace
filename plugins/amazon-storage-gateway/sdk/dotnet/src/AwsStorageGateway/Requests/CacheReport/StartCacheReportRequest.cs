using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.CacheReport;

/// <summary>
/// The inputs of the StartCacheReport operation.
/// </summary>
public sealed record StartCacheReportRequest
{
    public required XAmzTarget4AwsStorageGatewayCacheReportApi XAmzTarget { get; init; }
}
