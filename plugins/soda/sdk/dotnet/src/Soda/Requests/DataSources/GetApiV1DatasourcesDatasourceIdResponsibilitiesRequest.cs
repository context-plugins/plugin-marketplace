namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the GetApiV1DatasourcesDatasourceIdResponsibilities operation.
/// </summary>
public sealed record GetApiV1DatasourcesDatasourceIdResponsibilitiesRequest
{
    public required string DatasourceId { get; init; }

    public int? Page { get; init; }

    public int? Size { get; init; }
}
