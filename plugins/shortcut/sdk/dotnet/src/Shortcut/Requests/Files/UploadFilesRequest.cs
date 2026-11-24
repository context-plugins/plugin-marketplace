using Shortcut.Core.Models;

namespace Shortcut.Requests.Files;

/// <summary>
/// The inputs of the UploadFiles operation.
/// </summary>
public sealed record UploadFilesRequest
{
    /// <summary>
    /// A file upload. At least one is required.
    /// </summary>
    public required BinaryContent File0 { get; init; }

    /// <summary>
    /// The story ID that these files will be associated with.
    /// </summary>
    public long? StoryId { get; init; }

    /// <summary>
    /// Optional additional files.
    /// </summary>
    public BinaryContent? File1 { get; init; }

    /// <summary>
    /// Optional additional files.
    /// </summary>
    public BinaryContent? File2 { get; init; }

    /// <summary>
    /// Optional additional files.
    /// </summary>
    public BinaryContent? File3 { get; init; }
}
