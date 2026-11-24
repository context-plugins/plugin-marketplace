using Soda.Models;

namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the PostApiV1DatasourcesRolesRoleId operation.
/// </summary>
public sealed record PostApiV1DatasourcesRolesRoleIdRequest
{
    public required string RoleId { get; init; }

    public required PublicApiDatasourceRoleRequestDto Body { get; init; }
}
