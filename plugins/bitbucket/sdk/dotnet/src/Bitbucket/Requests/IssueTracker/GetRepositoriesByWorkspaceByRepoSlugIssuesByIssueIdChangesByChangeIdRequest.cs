namespace Bitbucket.Requests.IssueTracker;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeId operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesByChangeIdRequest
{
    /// <summary>
    /// The issue change id
    /// </summary>
    public required string ChangeId { get; init; }

    /// <summary>
    /// The issue id
    /// </summary>
    public required string IssueId { get; init; }

    /// <summary>
    /// This can either be the repository slug or the UUID of the repository,
    /// surrounded by curly-braces, for example: <c>{repository UUID}</c>.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }
}
