using BrowserUse.Models;

namespace BrowserUse.Requests.Workspaces;

/// <summary>
/// The inputs of the CreateWorkspaceWorkspacesPost operation.
/// </summary>
public sealed record CreateWorkspaceWorkspacesPostRequest
{
    public required WorkspaceCreateRequest Body { get; init; }
}
