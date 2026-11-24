namespace CircleCi.Requests.ProjectApi;

/// <summary>
/// The inputs of the DeleteProjectEnvironmentVariable operation.
/// </summary>
public sealed record DeleteProjectEnvironmentVariableRequest
{
    /// <summary>
    /// The project slug in the form vcs-slug/org-name/repo-name (e.g., gh/CircleCI-Public/api-preview-docs)
    /// </summary>
    public required string ProjectSlug { get; init; }

    /// <summary>
    /// The name of the environment variable
    /// </summary>
    public required string Name { get; init; }
}
