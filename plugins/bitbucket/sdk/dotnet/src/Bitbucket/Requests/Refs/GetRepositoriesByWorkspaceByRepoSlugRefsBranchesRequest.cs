namespace Bitbucket.Requests.Refs;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugRefsBranches operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugRefsBranchesRequest
{
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
    /// Query string to narrow down the response as per
    /// <see href="/cloud/bitbucket/rest/intro/#filtering">filtering and sorting</see>.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Field by which the results should be sorted as per
    /// <see href="/cloud/bitbucket/rest/intro/#filtering">filtering and sorting</see>. The <c>name</c>
    /// field is handled specially for branches in that, if specified as the sort field, it
    /// uses a natural sort order instead of the default lexicographical sort order. For example,
    /// it will return ['branch1', 'branch2', 'branch10'] instead of ['branch1', 'branch10', 'branch2'].
    /// </summary>
    public string? Sort { get; init; }
}
