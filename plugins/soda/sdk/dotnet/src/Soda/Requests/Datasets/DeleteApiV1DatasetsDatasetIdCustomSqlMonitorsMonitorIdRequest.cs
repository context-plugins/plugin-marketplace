namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId operation.
/// </summary>
public sealed record DeleteApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest
{
    public required string DatasetId { get; init; }

    public required string MonitorId { get; init; }
}
