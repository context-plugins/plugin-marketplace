using Shortcut.Models;

namespace Shortcut.Requests.Files;

/// <summary>
/// The inputs of the UpdateFile operation.
/// </summary>
public sealed record UpdateFileRequest
{
    /// <summary>
    /// The unique ID assigned to the file in Shortcut.
    /// </summary>
    public required long FilePublicId { get; init; }

    public required UpdateFile Body { get; init; }
}
