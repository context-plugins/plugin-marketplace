using Soda.Models;

namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the PostApiV1DatasetsRoles operation.
/// </summary>
public sealed record PostApiV1DatasetsRolesRequest
{
    public required PublicApiDatasetRoleRequestDto Body { get; init; }
}
