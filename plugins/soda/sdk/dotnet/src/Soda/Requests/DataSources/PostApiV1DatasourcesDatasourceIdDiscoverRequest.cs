namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the PostApiV1DatasourcesDatasourceIdDiscover operation.
/// </summary>
public sealed record PostApiV1DatasourcesDatasourceIdDiscoverRequest
{
    public required string DatasourceId { get; init; }
}
