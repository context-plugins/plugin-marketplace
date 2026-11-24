using CodeQr.Models;

namespace CodeQr.Requests.Folders;

/// <summary>
/// The inputs of the CreateFolder operation.
/// </summary>
public sealed record CreateFolderRequest
{
    public FoldersRequest? Body { get; init; }
}
