using Soda.Models;

namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the PostApiV1DatasetsDatasetIdResponsibilities operation.
/// </summary>
public sealed record PostApiV1DatasetsDatasetIdResponsibilitiesRequest
{
    public required string DatasetId { get; init; }

    public required PublicApiUpdateDatasetResponsibilitiesRequestDto Body { get; init; }
}
