using System;
using Shortcut.Models;

namespace Shortcut.Requests.Documents;

/// <summary>
/// The inputs of the DeleteDoc operation.
/// </summary>
public sealed record DeleteDocRequest
{
    /// <summary>
    /// The Doc's public ID
    /// </summary>
    public required Guid DocPublicId { get; init; }

    public required GetDoc Body { get; init; }
}
