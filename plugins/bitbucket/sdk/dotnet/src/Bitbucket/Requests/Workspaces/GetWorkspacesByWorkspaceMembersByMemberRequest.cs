namespace Bitbucket.Requests.Workspaces;

/// <summary>
/// The inputs of the GetWorkspacesByWorkspaceMembersByMember operation.
/// </summary>
public sealed record GetWorkspacesByWorkspaceMembersByMemberRequest
{
    /// <summary>
    /// Member's UUID or Atlassian ID.
    /// </summary>
    public required string Member { get; init; }

    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }
}
