using CodeQr.Models;

namespace CodeQr.Requests.Folders;

/// <summary>
/// The inputs of the UpdateFolder operation.
/// </summary>
public sealed record UpdateFolderRequest
{
    /// <summary>
    /// The ID of the folder to update.
    /// </summary>
    public required string Id { get; init; }

    public FoldersRequest1? Body { get; init; }
}
