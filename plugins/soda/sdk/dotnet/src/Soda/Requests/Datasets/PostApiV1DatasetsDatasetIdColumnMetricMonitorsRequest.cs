using Soda.Models;

namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the PostApiV1DatasetsDatasetIdColumnMetricMonitors operation.
/// </summary>
public sealed record PostApiV1DatasetsDatasetIdColumnMetricMonitorsRequest
{
    public required string DatasetId { get; init; }

    public required PublicApiCreateColumnMetricMonitorRequestDto Body { get; init; }
}
