namespace DoiT.Requests.Folders;

/// <summary>
/// The inputs of the GetFolder operation.
/// </summary>
public sealed record GetFolderRequest
{
    /// <summary>
    /// Folder ID.
    /// </summary>
    public required string Id { get; init; }
}
