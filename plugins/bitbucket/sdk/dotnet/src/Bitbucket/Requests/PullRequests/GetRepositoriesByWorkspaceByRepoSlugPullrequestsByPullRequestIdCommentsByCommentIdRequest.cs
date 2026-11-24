namespace Bitbucket.Requests.PullRequests;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentId operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdCommentsByCommentIdRequest
{
    /// <summary>
    /// The id of the comment.
    /// </summary>
    public required long CommentId { get; init; }

    /// <summary>
    /// The id of the pull request.
    /// </summary>
    public required int PullRequestId { get; init; }

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
