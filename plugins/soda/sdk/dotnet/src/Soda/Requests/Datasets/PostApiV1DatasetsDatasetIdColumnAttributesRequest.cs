using Soda.Models;

namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the PostApiV1DatasetsDatasetIdColumnAttributes operation.
/// </summary>
public sealed record PostApiV1DatasetsDatasetIdColumnAttributesRequest
{
    public required string DatasetId { get; init; }

    public required PublicApiSetColumnAttributesRequestDto Body { get; init; }
}
