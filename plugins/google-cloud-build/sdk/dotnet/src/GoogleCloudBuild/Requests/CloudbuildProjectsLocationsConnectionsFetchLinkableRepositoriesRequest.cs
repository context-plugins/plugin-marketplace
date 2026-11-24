namespace GoogleCloudBuild.Requests;

/// <summary>
/// The inputs of the CloudbuildProjectsLocationsConnectionsFetchLinkableRepositories operation.
/// </summary>
public sealed record CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesRequest
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
    /// Number of results to return in the list. Default to 20.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Page start.
    /// </summary>
    public string? PageToken { get; init; }
}
