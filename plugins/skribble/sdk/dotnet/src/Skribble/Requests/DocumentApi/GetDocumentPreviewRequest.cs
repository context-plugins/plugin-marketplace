using System;
using Skribble.Core.Validation.Attributes;

namespace Skribble.Requests.DocumentApi;

/// <summary>
/// The inputs of the GetDocumentPreview operation.
/// </summary>
public sealed record GetDocumentPreviewRequest
{
    /// <summary>
    /// Unique ID received when creating the Document Request object
    /// </summary>
    public required Guid DocId { get; init; }

    /// <summary>
    /// Page ID of the document
    /// </summary>
    public required int PageId { get; init; }

    /// <summary>
    /// The scaling factor for the image.
    /// </summary>
    [Minimum(0.0)]
    public double Scale { get; init; } = 100d;
}
