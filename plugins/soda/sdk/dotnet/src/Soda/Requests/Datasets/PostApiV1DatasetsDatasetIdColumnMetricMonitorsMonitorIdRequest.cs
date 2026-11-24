using Soda.Models;

namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId operation.
/// </summary>
public sealed record PostApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest
{
    public required string DatasetId { get; init; }

    public required string MonitorId { get; init; }

    public required PublicApiUpdateColumnMetricMonitorRequestDto Body { get; init; }
}
