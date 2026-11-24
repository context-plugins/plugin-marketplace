using Soda.Models;

namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the PostApiV1DatasetsDatasetIdCustomSqlMonitors operation.
/// </summary>
public sealed record PostApiV1DatasetsDatasetIdCustomSqlMonitorsRequest
{
    public required string DatasetId { get; init; }

    public required PublicApiCreateCustomSqlMonitorRequestDto Body { get; init; }
}
