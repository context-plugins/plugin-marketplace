namespace Bitbucket.Requests.IssueTracker;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZip operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest
{
    /// <summary>
    /// The name of the repo
    /// </summary>
    public required string RepoName { get; init; }

    /// <summary>
    /// This can either be the repository slug or the UUID of the repository,
    /// surrounded by curly-braces, for example: <c>{repository UUID}</c>.
    /// </summary>
    public required string RepoSlug { get; init; }

    /// <summary>
    /// The ID of the export task
    /// </summary>
    public required string TaskId { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }
}
