namespace Shortcut.Requests.LinkedFiles;

/// <summary>
/// The inputs of the DeleteLinkedFile operation.
/// </summary>
public sealed record DeleteLinkedFileRequest
{
    /// <summary>
    /// The unique identifier of the linked file.
    /// </summary>
    public required long LinkedFilePublicId { get; init; }
}
