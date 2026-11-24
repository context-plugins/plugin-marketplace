using System;
using Shortcut.Models.Enums;

namespace Shortcut.Requests.Documents;

/// <summary>
/// The inputs of the GetDoc operation.
/// </summary>
public sealed record GetDocRequest
{
    /// <summary>
    /// The Doc's public ID
    /// </summary>
    public required Guid DocPublicId { get; init; }

    /// <summary>
    /// Format of the content to return. Defaults to 'markdown'. If 'html', includes HTML content in response.
    /// </summary>
    public ContentFormat3? ContentFormat { get; init; }
}
