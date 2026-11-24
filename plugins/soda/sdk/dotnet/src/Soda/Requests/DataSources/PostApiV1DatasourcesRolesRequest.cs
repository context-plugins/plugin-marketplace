using Soda.Models;

namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the PostApiV1DatasourcesRoles operation.
/// </summary>
public sealed record PostApiV1DatasourcesRolesRequest
{
    public required PublicApiDatasourceRoleRequestDto Body { get; init; }
}
