using System;
using BrowserUse.Models;

namespace BrowserUse.Requests.Workspaces;

/// <summary>
/// The inputs of the UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPost operation.
/// </summary>
public sealed record UploadWorkspaceFilesWorkspacesWorkspaceIdFilesUploadPostRequest
{
    public required Guid WorkspaceId { get; init; }

    public required WorkspaceFileUploadRequest Body { get; init; }
}
