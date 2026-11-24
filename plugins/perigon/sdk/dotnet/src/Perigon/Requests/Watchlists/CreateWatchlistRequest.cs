using Perigon.Models;

namespace Perigon.Requests.Watchlists;

/// <summary>
/// The inputs of the CreateWatchlist operation.
/// </summary>
public sealed record CreateWatchlistRequest
{
    public required CreateWatchlistParams Body { get; init; }
}
