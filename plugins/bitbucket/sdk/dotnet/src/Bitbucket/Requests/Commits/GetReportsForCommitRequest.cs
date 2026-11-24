namespace Bitbucket.Requests.Commits;

/// <summary>
/// The inputs of the GetReportsForCommit operation.
/// </summary>
public sealed record GetReportsForCommitRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces, for example <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The repository.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// The commit for which to retrieve reports.
    /// </summary>
    public required string Commit { get; init; }
}
