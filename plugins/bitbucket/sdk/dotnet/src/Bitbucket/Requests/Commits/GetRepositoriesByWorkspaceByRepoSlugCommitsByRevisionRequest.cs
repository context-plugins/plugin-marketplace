namespace Bitbucket.Requests.Commits;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugCommitsByRevision operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugCommitsByRevisionRequest
{
    /// <summary>
    /// This can either be the repository slug or the UUID of the repository,
    /// surrounded by curly-braces, for example: <c>{repository UUID}</c>.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// A commit SHA1 or ref name.
    /// </summary>
    public required string Revision { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }
}
