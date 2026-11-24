namespace Bitbucket.Requests.PullRequests;

/// <summary>
/// The inputs of the GetPullrequestsForCommit operation.
/// </summary>
public sealed record GetPullrequestsForCommitRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID surrounded by curly-braces
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// The repository; either the UUID in curly braces, or the slug
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// The SHA1 of the commit
    /// </summary>
    public required string Commit { get; init; }

    /// <summary>
    /// Which page to retrieve
    /// </summary>
    public int Page { get; init; } = 1;

    /// <summary>
    /// How many pull requests to retrieve per page
    /// </summary>
    public int Pagelen { get; init; } = 30;
}
