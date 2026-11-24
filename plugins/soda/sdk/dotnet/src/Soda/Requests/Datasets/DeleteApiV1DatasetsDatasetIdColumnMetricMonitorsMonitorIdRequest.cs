namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorId operation.
/// </summary>
public sealed record DeleteApiV1DatasetsDatasetIdColumnMetricMonitorsMonitorIdRequest
{
    public required string DatasetId { get; init; }

    public required string MonitorId { get; init; }
}
