namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the GetApiV1DatasetsDatasetIdDiagnosticsWarehouse operation.
/// </summary>
public sealed record GetApiV1DatasetsDatasetIdDiagnosticsWarehouseRequest
{
    public required string DatasetId { get; init; }
}
