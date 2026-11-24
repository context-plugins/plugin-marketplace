namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the GetApiV1DatasetsDatasetIdComputeWarehouse operation.
/// </summary>
public sealed record GetApiV1DatasetsDatasetIdComputeWarehouseRequest
{
    public required string DatasetId { get; init; }
}
