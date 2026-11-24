using GoogleCloudBuild.Models.Enums;

namespace GoogleCloudBuild.Requests;

/// <summary>
/// The inputs of the CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefs operation.
/// </summary>
public sealed record CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsRequest
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
    /// Optional. Number of results to return in the list. Default to 20.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Optional. Page start.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Type of refs to fetch
    /// </summary>
    public RefType? RefType { get; init; }
}
