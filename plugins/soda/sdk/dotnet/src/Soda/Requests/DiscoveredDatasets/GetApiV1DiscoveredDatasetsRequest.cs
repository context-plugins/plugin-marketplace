namespace Soda.Requests.DiscoveredDatasets;

/// <summary>
/// The inputs of the GetApiV1DiscoveredDatasets operation.
/// </summary>
public sealed record GetApiV1DiscoveredDatasetsRequest
{
    public string? DatasourceId { get; init; }

    public int? Page { get; init; }

    public string? Search { get; init; }

    public int? Size { get; init; }
}
