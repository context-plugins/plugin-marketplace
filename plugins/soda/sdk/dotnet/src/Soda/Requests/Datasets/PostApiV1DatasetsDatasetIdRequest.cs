using Soda.Models;

namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the PostApiV1DatasetsDatasetId operation.
/// </summary>
public sealed record PostApiV1DatasetsDatasetIdRequest
{
    public required string DatasetId { get; init; }

    public required PublicApiUpdateDatasetDto Body { get; init; }
}
