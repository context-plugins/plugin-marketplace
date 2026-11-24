namespace DoiT.Requests.Folders;

/// <summary>
/// The inputs of the DeleteFolder operation.
/// </summary>
public sealed record DeleteFolderRequest
{
    /// <summary>
    /// Folder ID.
    /// </summary>
    public required string Id { get; init; }
}
