using Bitbucket.Models.Enums;

namespace Bitbucket.Requests.Workspaces;

/// <summary>
/// The inputs of the GetWorkspacesByWorkspacePullrequestsBySelectedUser2 operation.
/// </summary>
public sealed record GetWorkspacesByWorkspacePullrequestsBySelectedUser2Request
{
    /// <summary>
    /// This can either be the username of the pull request author, the author's UUID
    /// surrounded by curly-braces, for example: <c>{account UUID}</c>, or the author's Atlassian ID.
    /// </summary>
    public required string SelectedUser { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }

    /// <summary>
    /// Only return pull requests that are in this state. This parameter can be repeated.
    /// </summary>
    public State2BitbucketWorkspacesApi? State { get; init; }
}
