using Soda.Models;

namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the PostApiV1DatasourcesDatasourceId operation.
/// </summary>
public sealed record PostApiV1DatasourcesDatasourceIdRequest
{
    public required string DatasourceId { get; init; }

    public required PublicApiUpdateDatasourceRequestDto Body { get; init; }
}
