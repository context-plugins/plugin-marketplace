namespace Audioscrape.Requests.DataExport;

/// <summary>
/// The inputs of the GetWorkspaceExport operation.
/// </summary>
public sealed record GetWorkspaceExportRequest
{
    /// <summary>
    /// Workspace ID
    /// </summary>
    public required long Workspace { get; init; }

    /// <summary>
    /// Export job ID returned by POST /api/workspaces/{workspace}/export
    /// </summary>
    public required long JobId { get; init; }
}
