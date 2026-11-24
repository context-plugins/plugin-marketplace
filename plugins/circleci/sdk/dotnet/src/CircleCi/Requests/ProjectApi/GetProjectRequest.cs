namespace CircleCi.Requests.ProjectApi;

/// <summary>
/// The inputs of the GetProject operation.
/// </summary>
public sealed record GetProjectRequest
{
    /// <summary>
    /// The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs)
    /// </summary>
    public required string ProjectSlug { get; init; }
}
