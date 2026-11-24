namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the DeleteApiV1DatasetsDatasetId operation.
/// </summary>
public sealed record DeleteApiV1DatasetsDatasetIdRequest
{
    public required string DatasetId { get; init; }
}
