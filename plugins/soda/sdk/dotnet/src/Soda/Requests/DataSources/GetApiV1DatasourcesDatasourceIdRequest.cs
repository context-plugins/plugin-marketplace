namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the GetApiV1DatasourcesDatasourceId operation.
/// </summary>
public sealed record GetApiV1DatasourcesDatasourceIdRequest
{
    public required string DatasourceId { get; init; }
}
