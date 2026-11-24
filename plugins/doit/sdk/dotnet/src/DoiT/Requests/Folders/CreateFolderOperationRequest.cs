using DoiT.Models;

namespace DoiT.Requests.Folders;

/// <summary>
/// The inputs of the CreateFolder operation.
/// </summary>
public sealed record CreateFolderOperationRequest
{
    public required CreateFolderRequest Body { get; init; }
}
