using Bitbucket.Models;

namespace Bitbucket.Requests.PullRequests;

/// <summary>
/// The inputs of the PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskId operation.
/// </summary>
public sealed record PutRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksByTaskIdRequest
{
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
    /// The ID of the task.
    /// </summary>
    public required long TaskId { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The updated state and content of the task.
    /// </summary>
    public required PullRequestTaskUpdate Body { get; init; }
}
