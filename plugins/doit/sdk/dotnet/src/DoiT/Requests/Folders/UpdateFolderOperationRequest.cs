using DoiT.Models;

namespace DoiT.Requests.Folders;

/// <summary>
/// The inputs of the UpdateFolder operation.
/// </summary>
public sealed record UpdateFolderOperationRequest
{
    /// <summary>
    /// Folder ID.
    /// </summary>
    public required string Id { get; init; }

    public required UpdateFolderRequest Body { get; init; }
}
