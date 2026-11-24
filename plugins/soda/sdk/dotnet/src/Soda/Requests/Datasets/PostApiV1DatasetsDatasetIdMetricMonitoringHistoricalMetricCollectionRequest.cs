namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollection operation.
/// </summary>
public sealed record PostApiV1DatasetsDatasetIdMetricMonitoringHistoricalMetricCollectionRequest
{
    public required string DatasetId { get; init; }
}
