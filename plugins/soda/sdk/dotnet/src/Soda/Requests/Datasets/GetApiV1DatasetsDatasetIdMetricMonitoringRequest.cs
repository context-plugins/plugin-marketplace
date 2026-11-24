namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the GetApiV1DatasetsDatasetIdMetricMonitoring operation.
/// </summary>
public sealed record GetApiV1DatasetsDatasetIdMetricMonitoringRequest
{
    public required string DatasetId { get; init; }
}
