namespace Shortcut.Requests.LinkedFiles;

/// <summary>
/// The inputs of the GetLinkedFile operation.
/// </summary>
public sealed record GetLinkedFileRequest
{
    /// <summary>
    /// The unique identifier of the linked file.
    /// </summary>
    public required long LinkedFilePublicId { get; init; }
}
