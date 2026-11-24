namespace Bitbucket.Requests.Commits;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspec operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugMergeBaseByRevspecRequest
{
    /// <summary>
    /// This can either be the repository slug or the UUID of the repository,
    /// surrounded by curly-braces, for example: <c>{repository UUID}</c>.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// A commit range using double dot notation (e.g. <c>3a8b42..9ff173</c>).
    /// </summary>
    public required string Revspec { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }
}
