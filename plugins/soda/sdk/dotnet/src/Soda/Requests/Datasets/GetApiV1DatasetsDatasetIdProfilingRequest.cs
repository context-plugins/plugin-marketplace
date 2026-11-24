namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the GetApiV1DatasetsDatasetIdProfiling operation.
/// </summary>
public sealed record GetApiV1DatasetsDatasetIdProfilingRequest
{
    public required string DatasetId { get; init; }
}
