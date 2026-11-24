namespace Shortcut.Requests.Files;

/// <summary>
/// The inputs of the DeleteFile operation.
/// </summary>
public sealed record DeleteFileRequest
{
    /// <summary>
    /// The File’s unique ID.
    /// </summary>
    public required long FilePublicId { get; init; }
}
