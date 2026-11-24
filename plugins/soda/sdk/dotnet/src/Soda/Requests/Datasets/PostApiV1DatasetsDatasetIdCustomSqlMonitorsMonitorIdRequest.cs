using Soda.Models;

namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorId operation.
/// </summary>
public sealed record PostApiV1DatasetsDatasetIdCustomSqlMonitorsMonitorIdRequest
{
    public required string DatasetId { get; init; }

    public required string MonitorId { get; init; }

    public required PublicApiUpdateCustomSqlMonitorRequestDto Body { get; init; }
}
