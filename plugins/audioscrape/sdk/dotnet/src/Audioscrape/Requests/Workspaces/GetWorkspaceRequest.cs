namespace Audioscrape.Requests.Workspaces;

/// <summary>
/// The inputs of the GetWorkspace operation.
/// </summary>
public sealed record GetWorkspaceRequest
{
    /// <summary>
    /// Workspace slug (e.g. <c>audioscrape</c>) or numeric workspace ID
    /// </summary>
    public required string Workspace { get; init; }
}
