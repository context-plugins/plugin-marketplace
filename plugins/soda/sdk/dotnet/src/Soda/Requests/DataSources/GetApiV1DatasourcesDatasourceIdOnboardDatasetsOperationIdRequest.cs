namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationId operation.
/// </summary>
public sealed record GetApiV1DatasourcesDatasourceIdOnboardDatasetsOperationIdRequest
{
    public required string DatasourceId { get; init; }

    public required string OperationId { get; init; }
}
