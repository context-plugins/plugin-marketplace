namespace Bitbucket.Requests.PullRequests;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasks operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugPullrequestsByPullRequestIdTasksRequest
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
    /// Query string to narrow down the response. See
    /// <see href="/cloud/bitbucket/rest/intro/#filtering">filtering and sorting</see> for details.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Field by which the results should be sorted as per
    /// <see href="/cloud/bitbucket/rest/intro/#filtering">filtering and sorting</see>.
    /// Defaults to <c>created_on</c>.
    /// </summary>
    public string? Sort { get; init; }

    /// <summary>
    /// Current number of objects on the existing page.
    /// The default value is 10 with 100 being the maximum allowed value.
    /// Individual APIs may enforce different values.
    /// </summary>
    public int? Pagelen { get; init; }
}
