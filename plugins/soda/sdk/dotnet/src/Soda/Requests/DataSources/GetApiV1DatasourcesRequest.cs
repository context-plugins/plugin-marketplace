namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the GetApiV1Datasources operation.
/// </summary>
public sealed record GetApiV1DatasourcesRequest
{
    public int? Page { get; init; }

    public string? Search { get; init; }

    public int? Size { get; init; }
}
