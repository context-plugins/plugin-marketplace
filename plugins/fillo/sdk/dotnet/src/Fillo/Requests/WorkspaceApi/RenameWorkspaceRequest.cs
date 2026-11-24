using Fillo.Models;

namespace Fillo.Requests.WorkspaceApi;

/// <summary>
/// The inputs of the RenameWorkspace operation.
/// </summary>
public sealed record RenameWorkspaceRequest
{
    public required ApiV1ManageWorkspaceRequest Body { get; init; }
}
