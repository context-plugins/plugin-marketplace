namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the DeleteApiV1DatasourcesRolesRoleId operation.
/// </summary>
public sealed record DeleteApiV1DatasourcesRolesRoleIdRequest
{
    public required string RoleId { get; init; }
}
