namespace GoogleCloudBuild.Requests;

/// <summary>
/// The inputs of the CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteToken operation.
/// </summary>
public sealed record CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenRequest
{
    /// <summary>
    /// Resource name segment (projectsId).
    /// </summary>
    public required string ProjectsId { get; init; }

    /// <summary>
    /// Resource name segment (locationsId).
    /// </summary>
    public required string LocationsId { get; init; }

    /// <summary>
    /// Resource name segment (connectionsId).
    /// </summary>
    public required string ConnectionsId { get; init; }

    /// <summary>
    /// Resource name segment (repositoriesId).
    /// </summary>
    public required string RepositoriesId { get; init; }

    public required object Body { get; init; }
}
