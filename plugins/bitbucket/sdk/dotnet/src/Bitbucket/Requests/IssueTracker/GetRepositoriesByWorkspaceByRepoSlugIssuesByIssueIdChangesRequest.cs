namespace Bitbucket.Requests.IssueTracker;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChanges operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugIssuesByIssueIdChangesRequest
{
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

    /// <summary>
    /// Query string to narrow down the response. See
    /// <see href="/cloud/bitbucket/rest/intro/#filtering">filtering and sorting</see> for details.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Name of a response property to sort results. See
    /// <see href="/cloud/bitbucket/rest/intro/#sorting-query-results">filtering and sorting</see>
    /// for details.
    /// </summary>
    public string? Sort { get; init; }
}
