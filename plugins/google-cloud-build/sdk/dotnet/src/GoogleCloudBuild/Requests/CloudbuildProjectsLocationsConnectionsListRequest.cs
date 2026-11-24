namespace GoogleCloudBuild.Requests;

/// <summary>
/// The inputs of the CloudbuildProjectsLocationsConnectionsList operation.
/// </summary>
public sealed record CloudbuildProjectsLocationsConnectionsListRequest
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
