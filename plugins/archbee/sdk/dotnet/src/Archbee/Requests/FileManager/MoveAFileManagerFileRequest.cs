using Archbee.Models;

namespace Archbee.Requests.FileManager;

/// <summary>
/// The inputs of the MoveAFileManagerFile operation.
/// </summary>
public sealed record MoveAFileManagerFileRequest
{
    public required FileManagerMoveRequest Body { get; init; }
}
