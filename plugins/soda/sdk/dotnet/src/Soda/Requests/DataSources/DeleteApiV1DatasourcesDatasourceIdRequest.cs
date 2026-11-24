namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the DeleteApiV1DatasourcesDatasourceId operation.
/// </summary>
public sealed record DeleteApiV1DatasourcesDatasourceIdRequest
{
    public required string DatasourceId { get; init; }
}
