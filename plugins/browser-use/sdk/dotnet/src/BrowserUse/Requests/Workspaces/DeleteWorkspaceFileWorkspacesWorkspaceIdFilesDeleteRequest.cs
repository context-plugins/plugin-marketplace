using System;
using System.ComponentModel.DataAnnotations;

namespace BrowserUse.Requests.Workspaces;

/// <summary>
/// The inputs of the DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDelete operation.
/// </summary>
public sealed record DeleteWorkspaceFileWorkspacesWorkspaceIdFilesDeleteRequest
{
    public required Guid WorkspaceId { get; init; }

    /// <summary>
    /// Relative file path to delete
    /// </summary>
    [MinLength(1)]
    public required string Path { get; init; }
}
