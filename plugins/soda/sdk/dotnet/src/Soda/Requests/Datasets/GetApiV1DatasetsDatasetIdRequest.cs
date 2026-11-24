namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the GetApiV1DatasetsDatasetId operation.
/// </summary>
public sealed record GetApiV1DatasetsDatasetIdRequest
{
    public required string DatasetId { get; init; }
}
