using System;
using BrowserUse.Models;

namespace BrowserUse.Requests.Workspaces;

/// <summary>
/// The inputs of the UpdateWorkspaceWorkspacesWorkspaceIdPatch operation.
/// </summary>
public sealed record UpdateWorkspaceWorkspacesWorkspaceIdPatchRequest
{
    public required Guid WorkspaceId { get; init; }

    public required WorkspaceUpdateRequest Body { get; init; }
}
