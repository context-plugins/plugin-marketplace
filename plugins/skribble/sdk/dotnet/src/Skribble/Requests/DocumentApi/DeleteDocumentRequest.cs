using System;

namespace Skribble.Requests.DocumentApi;

/// <summary>
/// The inputs of the DeleteDocument operation.
/// </summary>
public sealed record DeleteDocumentRequest
{
    /// <summary>
    /// Unique ID received when creating the Document Request object
    /// </summary>
    public required Guid DocId { get; init; }
}
