using Soda.Models;

namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the PostApiV1DatasourcesDatasourceIdResponsibilities operation.
/// </summary>
public sealed record PostApiV1DatasourcesDatasourceIdResponsibilitiesRequest
{
    public required string DatasourceId { get; init; }

    public required PublicApiUpdateDatasourceResponsibilitiesRequestDto Body { get; init; }
}
