namespace Bitbucket.Requests.Source;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2 operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugFilehistoryByCommitByPath2Request
{
    /// <summary>
    /// The commit's SHA1.
    /// </summary>
    public required string Commit { get; init; }

    /// <summary>
    /// Path to the file.
    /// </summary>
    public required string Path { get; init; }

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
    /// When <c>true</c>, Bitbucket will follow the history of the file across
    /// renames (this is the default behavior). This can be turned off by
    /// specifying <c>false</c>.
    /// </summary>
    public string? Renames { get; init; }

    /// <summary>
    /// Query string to narrow down the response as per
    /// <see href="/cloud/bitbucket/rest/intro/#filtering">filtering and sorting</see>.
    /// </summary>
    public string? Q { get; init; }

    /// <summary>
    /// Name of a response property sort the result by as per
    /// <see href="/cloud/bitbucket/rest/intro/#sorting-query-results">filtering and sorting</see>.
    /// </summary>
    public string? Sort { get; init; }
}
