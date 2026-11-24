namespace Bitbucket.Requests.Workspaces;

/// <summary>
/// The inputs of the GetWorkspacesByWorkspaceProjects operation.
/// </summary>
public sealed record GetWorkspacesByWorkspaceProjectsRequest
{
    /// <summary>
    /// This can either be the workspace ID (slug) or the workspace UUID
    /// surrounded by curly-braces, for example: <c>{workspace UUID}</c>.
    /// </summary>
    public required string Workspace { get; init; }
}
