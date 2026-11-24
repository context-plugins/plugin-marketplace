using System;

namespace Shortcut.Requests.Documents;

/// <summary>
/// The inputs of the LinkDocumentToEpic operation.
/// </summary>
public sealed record LinkDocumentToEpicRequest
{
    /// <summary>
    /// The public ID of the Document.
    /// </summary>
    public required Guid DocPublicId { get; init; }

    /// <summary>
    /// The public ID of the Epic.
    /// </summary>
    public required long EpicPublicId { get; init; }
}
