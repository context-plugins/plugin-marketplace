using Archbee.Models;

namespace Archbee.Requests.FileManager;

/// <summary>
/// The inputs of the DeleteAFileManagerFile operation.
/// </summary>
public sealed record DeleteAFileManagerFileRequest
{
    public required FileManagerFileRequest Body { get; init; }
}
