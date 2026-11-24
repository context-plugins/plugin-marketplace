using Shortcut.Models;

namespace Shortcut.Requests.LinkedFiles;

/// <summary>
/// The inputs of the UpdateLinkedFile operation.
/// </summary>
public sealed record UpdateLinkedFileRequest
{
    /// <summary>
    /// The unique identifier of the linked file.
    /// </summary>
    public required long LinkedFilePublicId { get; init; }

    public required UpdateLinkedFile Body { get; init; }
}
