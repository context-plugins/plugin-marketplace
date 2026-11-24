using Skribble.Core.Models;

namespace Skribble.Requests.SendTo;

/// <summary>
/// The inputs of the CreateSendTo operation.
/// </summary>
public sealed record CreateSendToOperationRequest
{
    /// <summary>
    /// Title of the document.
    /// </summary>
    public required string Title { get; init; }

    /// <summary>
    /// PDF file to upload.
    /// </summary>
    public required BinaryContent Content { get; init; }
}
