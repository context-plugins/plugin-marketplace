using AwsStorageGateway.Models.Enums;

namespace AwsStorageGateway.Requests.CacheReport;

/// <summary>
/// The inputs of the ListCacheReports operation.
/// </summary>
public sealed record ListCacheReportsRequest
{
    public required XAmzTarget3AwsStorageGatewayCacheReportApi XAmzTarget { get; init; }
}
