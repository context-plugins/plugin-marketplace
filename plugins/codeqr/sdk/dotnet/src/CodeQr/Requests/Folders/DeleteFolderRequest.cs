namespace CodeQr.Requests.Folders;

/// <summary>
/// The inputs of the DeleteFolder operation.
/// </summary>
public sealed record DeleteFolderRequest
{
    /// <summary>
    /// The ID of the folder to delete.
    /// </summary>
    public required string Id { get; init; }
}
