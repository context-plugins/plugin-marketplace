using Soda.Models;

namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouse operation.
/// </summary>
public sealed record PostApiV1DatasourcesDatasourceIdDiagnosticsWarehouseRequest
{
    public required string DatasourceId { get; init; }

    public required PublicApiUpdateDatasourceDiagnosticsWarehouseRequestDto Body { get; init; }
}
