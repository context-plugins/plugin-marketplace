using Soda.Models;

namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the PostApiV1DatasourcesDatasourceIdOnboardDatasets operation.
/// </summary>
public sealed record PostApiV1DatasourcesDatasourceIdOnboardDatasetsRequest
{
    public required string DatasourceId { get; init; }

    public required PublicApiOnboardDatasetsRequestDto Body { get; init; }
}
