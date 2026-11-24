namespace GoogleCloudBuild.Requests;

/// <summary>
/// The inputs of the CloudbuildProjectsLocationsConnectionsRepositoriesDelete operation.
/// </summary>
public sealed record CloudbuildProjectsLocationsConnectionsRepositoriesDeleteRequest
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

    /// <summary>
    /// The current etag of the repository. If an etag is provided and does not match the current etag of the repository, deletion will be blocked and an ABORTED error will be returned.
    /// </summary>
    public string? Etag { get; init; }

    /// <summary>
    /// If set, validate the request, but do not actually post it.
    /// </summary>
    public bool? ValidateOnly { get; init; }
}
