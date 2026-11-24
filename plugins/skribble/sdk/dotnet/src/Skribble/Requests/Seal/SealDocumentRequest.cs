using Skribble.Models;

namespace Skribble.Requests.Seal;

/// <summary>
/// The inputs of the SealDocument operation.
/// </summary>
public sealed record SealDocumentRequest
{
    /// <summary>
    /// Content base64-encoded in a JSON object
    /// </summary>
    public required CreateSealRequest Body { get; init; }
}
