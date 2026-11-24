using System;

namespace Shortcut.Requests.Documents;

/// <summary>
/// The inputs of the ListDocumentEpics operation.
/// </summary>
public sealed record ListDocumentEpicsRequest
{
    /// <summary>
    /// The public ID of the Document.
    /// </summary>
    public required Guid DocPublicId { get; init; }
}
