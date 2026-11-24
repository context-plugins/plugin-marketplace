using Bitbucket.Models;

namespace Bitbucket.Requests.PullRequests;

/// <summary>
/// The inputs of the PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMerge operation.
/// </summary>
public sealed record PostRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdMergeRequest
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
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// Default value is false.
    /// <para>
    ///
    /// When set to true, runs merge asynchronously and
    /// immediately returns a 202 with polling link to
    /// the task-status API in the Location header.
    /// </para>
    /// <para>
    ///
    /// When set to false, runs merge and waits for it to
    /// complete, returning 200 when it succeeds. If the
    /// duration of the merge exceeds a timeout threshold,
    /// the API returns a 202 with polling link to the
    /// task-status API in the Location header.
    /// </para>
    /// </summary>
    public bool? Async { get; init; }

    public PullRequestMergeParameters? Body { get; init; }
}
