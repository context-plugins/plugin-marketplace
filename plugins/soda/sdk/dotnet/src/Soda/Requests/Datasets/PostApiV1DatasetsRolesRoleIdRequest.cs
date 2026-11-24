using Soda.Models;

namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the PostApiV1DatasetsRolesRoleId operation.
/// </summary>
public sealed record PostApiV1DatasetsRolesRoleIdRequest
{
    public required string RoleId { get; init; }

    public required PublicApiDatasetRoleRequestDto Body { get; init; }
}
