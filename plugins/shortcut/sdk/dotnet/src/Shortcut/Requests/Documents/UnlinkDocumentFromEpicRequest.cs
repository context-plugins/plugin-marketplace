using System;

namespace Shortcut.Requests.Documents;

/// <summary>
/// The inputs of the UnlinkDocumentFromEpic operation.
/// </summary>
public sealed record UnlinkDocumentFromEpicRequest
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
