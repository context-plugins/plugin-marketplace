namespace Soda.Requests.Datasets;

/// <summary>
/// The inputs of the GetApiV1DatasetsRoles operation.
/// </summary>
public sealed record GetApiV1DatasetsRolesRequest
{
    public int? Page { get; init; }

    public int? Size { get; init; }
}
