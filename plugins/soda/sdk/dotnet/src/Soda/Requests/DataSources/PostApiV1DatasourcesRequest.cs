using Soda.Models;

namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the PostApiV1Datasources operation.
/// </summary>
public sealed record PostApiV1DatasourcesRequest
{
    public required PublicApiCreateDatasourceRequestDto Body { get; init; }
}
