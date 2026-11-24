namespace Bitbucket.Requests.CommitStatuses;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatuses operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugCommitByCommitStatusesRequest
{
    /// <summary>
    /// The commit's SHA1.
    /// </summary>
    public required string Commit { get; init; }

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
    /// If specified, only return commit status objects that were either
    /// created without a refname, or were created with the specified refname
    /// </summary>
    public string? Refname { get; init; }

    /// <summary>
    /// Query string to narrow down the response as per
    /// <see href="/cloud/bitbucket/rest/intro/#filtering">filtering and sorting</see>.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Field by which the results should be sorted as per
    /// <see href="/cloud/bitbucket/rest/intro/#filtering">filtering and sorting</see>.
    /// Defaults to <c>created_on</c>.
    /// </summary>
    public string? Sort { get; init; }
}
