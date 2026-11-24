using GoogleCloudBuild.Models;

namespace GoogleCloudBuild.Requests;

/// <summary>
/// The inputs of the CloudbuildProjectsLocationsConnectionsRepositoriesCreate operation.
/// </summary>
public sealed record CloudbuildProjectsLocationsConnectionsRepositoriesCreateRequest
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
    /// Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&amp;'()*+,;=@.
    /// </summary>
    public string? RepositoryId { get; init; }

    public required Repository Body { get; init; }
}
