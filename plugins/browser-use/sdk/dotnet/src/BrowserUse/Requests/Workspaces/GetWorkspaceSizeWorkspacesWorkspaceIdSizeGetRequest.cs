using System;

namespace BrowserUse.Requests.Workspaces;

/// <summary>
/// The inputs of the GetWorkspaceSizeWorkspacesWorkspaceIdSizeGet operation.
/// </summary>
public sealed record GetWorkspaceSizeWorkspacesWorkspaceIdSizeGetRequest
{
    public required Guid WorkspaceId { get; init; }
}
