using System.Collections.Generic;
using Beehiiv.Models.Enums;

namespace Beehiiv.Requests.Publications;

/// <summary>
/// The inputs of the Show13 operation.
/// </summary>
public sealed record Show13Request
{
    /// <summary>
    /// The prefixed ID of the publication object
    /// </summary>
    public required string PublicationId { get; init; }

    /// <summary>
    /// Optionally expand the results by adding additional information like subscription counts and engagement stats.
    /// </summary>
    public IReadOnlyList<PublicationsGetRequestExpandItem>? Expand { get; init; }

    /// <summary>
    /// Bearer authentication
    /// </summary>
    public required string Authorization { get; init; }
}
