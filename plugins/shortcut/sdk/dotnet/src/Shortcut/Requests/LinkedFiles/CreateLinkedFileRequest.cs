using Shortcut.Models;

namespace Shortcut.Requests.LinkedFiles;

/// <summary>
/// The inputs of the CreateLinkedFile operation.
/// </summary>
public sealed record CreateLinkedFileRequest
{
    public required CreateLinkedFile Body { get; init; }
}
