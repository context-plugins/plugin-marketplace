using System;

namespace BrowserUse.Requests.Workspaces;

/// <summary>
/// The inputs of the GetWorkspaceWorkspacesWorkspaceIdGet operation.
/// </summary>
public sealed record GetWorkspaceWorkspacesWorkspaceIdGetRequest
{
    public required Guid WorkspaceId { get; init; }
}
