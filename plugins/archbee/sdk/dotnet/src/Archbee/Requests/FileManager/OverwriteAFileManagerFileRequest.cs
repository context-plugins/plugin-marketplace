using Archbee.Core.Models;

namespace Archbee.Requests.FileManager;

/// <summary>
/// The inputs of the OverwriteAFileManagerFile operation.
/// </summary>
public sealed record OverwriteAFileManagerFileRequest
{
    /// <summary>
    /// Id of the existing file to overwrite.
    /// </summary>
    public required string FileId { get; init; }

    /// <summary>
    /// New file contents.
    /// </summary>
    public required BinaryContent File { get; init; }
}
