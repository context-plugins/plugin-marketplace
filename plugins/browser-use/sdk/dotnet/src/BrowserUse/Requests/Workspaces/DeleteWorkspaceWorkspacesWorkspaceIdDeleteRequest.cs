using System;

namespace BrowserUse.Requests.Workspaces;

/// <summary>
/// The inputs of the DeleteWorkspaceWorkspacesWorkspaceIdDelete operation.
/// </summary>
public sealed record DeleteWorkspaceWorkspacesWorkspaceIdDeleteRequest
{
    public required Guid WorkspaceId { get; init; }
}
