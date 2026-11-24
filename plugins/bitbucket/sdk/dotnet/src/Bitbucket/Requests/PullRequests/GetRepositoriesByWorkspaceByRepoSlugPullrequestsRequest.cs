using Bitbucket.Models.Enums;

namespace Bitbucket.Requests.PullRequests;

/// <summary>
/// The inputs of the GetRepositoriesByWorkspaceByRepoSlugPullrequests operation.
/// </summary>
public sealed record GetRepositoriesByWorkspaceByRepoSlugPullrequestsRequest
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
    /// Only return pull requests that are in this state. This parameter can be repeated.
    /// </summary>
    public State5? State { get; init; }
}
