namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the GetApiV1DatasetsDatasetIdColumns operation.
/// </summary>
public sealed record GetApiV1DatasetsDatasetIdColumnsRequest
{
    public required string DatasetId { get; init; }

    public int? Page { get; init; }

    public int? Size { get; init; }
}
