using Bitbucket.Models.AllOf;

namespace Bitbucket.Requests.PullRequests;

/// <summary>
/// The inputs of the PostRepositoriesByWorkspaceByRepoSlugPullrequests operation.
/// </summary>
public sealed record PostRepositoriesByWorkspaceByRepoSlugPullrequestsRequest
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
    /// The new pull request.
    /// <para>
    /// The request URL you POST to becomes the destination repository URL. For this reason, you must specify an explicit source repository in the request object if you want to pull from a different repository (fork).
    /// </para>
    /// <para>
    /// Since not all elements are required or even mutable, you only need to include the elements you want to initialize, such as the source branch and the title.
    /// </para>
    /// </summary>
    public Pullrequest? Body { get; init; }
}
