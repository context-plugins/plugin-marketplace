namespace Soda.Requests.DataSources;

/// <summary>
/// The inputs of the GetApiV1DatasourcesRoles operation.
/// </summary>
public sealed record GetApiV1DatasourcesRolesRequest
{
    public int? Page { get; init; }

    public int? Size { get; init; }
}
