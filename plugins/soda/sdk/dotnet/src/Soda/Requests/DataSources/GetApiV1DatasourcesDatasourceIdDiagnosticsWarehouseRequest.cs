namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouse operation.
/// </summary>
public sealed record GetApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest
{
    public required string DatasourceId { get; init; }
}
