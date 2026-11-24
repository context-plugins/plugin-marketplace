using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Perigon.Requests.Watchlists;

/// <summary>
/// The inputs of the ResolveWatchlists operation.
/// </summary>
public sealed record ResolveWatchlistsRequest
{
    /// <summary>
    /// Watchlist names to resolve (max 100)
    /// </summary>
    [MinLength(0)]
    [MaxLength(100)]
    public IReadOnlyList<string>? Name { get; init; }
}
