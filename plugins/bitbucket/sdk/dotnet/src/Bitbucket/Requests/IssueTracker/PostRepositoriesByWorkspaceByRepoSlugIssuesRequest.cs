using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.IssueTracker;

/// <summary>
/// The inputs of the PostRepositoriesByWorkspaceByRepoSlugIssues operation.
/// </summary>
public sealed record PostRepositoriesByWorkspaceByRepoSlugIssuesRequest
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
    /// The new issue. The only required element is <c>title</c>. All other elements can be omitted from the body.
    /// </summary>
    public required Issue Body { get; init; }
}
