namespace Bitbucket.Requests.Refs;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugRefsTags operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugRefsTagsRequest
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
    /// field is handled specially for tags in that, if specified as the sort field, it
    /// uses a natural sort order instead of the default lexicographical sort order. For example,
    /// it will return ['1.1', '1.2', '1.10'] instead of ['1.1', '1.10', '1.2'].
    /// </summary>
    public string? Sort { get; init; }
}
