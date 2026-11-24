namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the GetApiV1DatasetsDatasetIdResponsibilities operation.
/// </summary>
public sealed record GetApiV1DatasetsDatasetIdResponsibilitiesRequest
{
    public required string DatasetId { get; init; }

    public int? Page { get; init; }

    public int? Size { get; init; }
}
