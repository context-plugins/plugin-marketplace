using System;
using Shortcut.Models;

namespace Shortcut.Requests.Documents;

/// <summary>
/// The inputs of the UpdateDoc operation.
/// </summary>
public sealed record UpdateDocRequest
{
    /// <summary>
    /// The Doc's public ID
    /// </summary>
    public required Guid DocPublicId { get; init; }

    public required UpdateDoc Body { get; init; }
}
