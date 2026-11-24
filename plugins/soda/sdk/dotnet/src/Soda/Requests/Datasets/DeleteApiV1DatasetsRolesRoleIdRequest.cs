namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the DeleteApiV1DatasetsRolesRoleId operation.
/// </summary>
public sealed record DeleteApiV1DatasetsRolesRoleIdRequest
{
    public required string RoleId { get; init; }
}
