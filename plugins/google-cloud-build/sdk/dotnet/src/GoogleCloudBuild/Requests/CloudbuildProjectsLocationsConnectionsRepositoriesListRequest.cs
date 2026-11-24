namespace GoogleCloudBuild.Requests;

/// <summary>
/// The inputs of the CloudbuildProjectsLocationsConnectionsRepositoriesList operation.
/// </summary>
public sealed record CloudbuildProjectsLocationsConnectionsRepositoriesListRequest
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
    /// A filter expression that filters resources listed in the response. Expressions must follow API improvement proposal <see href="https://google.aip.dev/160">AIP-160</see>. e.g. <c>remote_uri:"https://github.com*"</c>.
    /// </summary>
    public string? Filter { get; init; }

    /// <summary>
    /// Number of results to return in the list.
    /// </summary>
    public int? PageSize { get; init; }

    /// <summary>
    /// Page start.
    /// </summary>
    public string? PageToken { get; init; }

    /// <summary>
    /// Optional. If set to true, the response will return partial results when some regions are unreachable. If set to false, the response will fail if any region is unreachable.
    /// </summary>
    public bool? ReturnPartialSuccess { get; init; }
}
