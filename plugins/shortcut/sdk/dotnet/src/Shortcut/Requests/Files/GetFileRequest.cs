namespace Shortcut.Requests.Files;

/// <summary>
/// The inputs of the GetFile operation.
/// </summary>
public sealed record GetFileRequest
{
    /// <summary>
    /// The File’s unique ID.
    /// </summary>
    public required long FilePublicId { get; init; }
}
