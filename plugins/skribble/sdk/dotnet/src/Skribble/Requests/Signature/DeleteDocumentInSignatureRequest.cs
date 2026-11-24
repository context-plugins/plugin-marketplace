using System;

namespace Skribble.Requests.Signature;

/// <summary>
/// The inputs of the DeleteDocumentInSignatureRequest operation.
/// </summary>
public sealed record DeleteDocumentInSignatureRequest
{
    /// <summary>
    /// Unique ID received when creating the Signature Request object
    /// </summary>
    public required Guid SrId { get; init; }

    /// <summary>
    /// Unique ID received when creating the Document Request object
    /// </summary>
    public required Guid DocId { get; init; }
}
