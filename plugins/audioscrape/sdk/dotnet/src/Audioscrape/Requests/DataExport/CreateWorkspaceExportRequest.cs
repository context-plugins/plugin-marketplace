namespace Audioscrape.Requests.DataExport;

/// <summary>
/// The inputs of the CreateWorkspaceExport operation.
/// </summary>
public sealed record CreateWorkspaceExportRequest
{
    /// <summary>
    /// Workspace ID
    /// </summary>
    public required long Workspace { get; init; }
}
