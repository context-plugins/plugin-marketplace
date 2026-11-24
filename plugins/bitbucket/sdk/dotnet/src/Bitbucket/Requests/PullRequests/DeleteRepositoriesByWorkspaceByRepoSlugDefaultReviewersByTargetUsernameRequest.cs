namespace Bitbucket.Requests.PullRequests;

/// <summary>
/// The inputs of the DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsername operation.
/// </summary>
public sealed record DeleteRepositoriesByWorkspaceByRepoSlugDefaultReviewersByTargetUsernameRequest
{
    /// <summary>
    /// This can either be the repository slug or the UUID of the repository,
    /// surrounded by curly-braces, for example: <c>{repository UUID}</c>.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// This can either be the username or the UUID of the default reviewer,
    /// surrounded by curly-braces, for example: <c>{account UUID}</c>.
    /// </summary>
    public required string TargetUsername { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }
}
