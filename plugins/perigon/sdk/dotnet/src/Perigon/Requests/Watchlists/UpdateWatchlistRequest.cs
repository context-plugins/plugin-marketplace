using Perigon.Models;

namespace Perigon.Requests.Watchlists;

/// <summary>
/// The inputs of the UpdateWatchlist operation.
/// </summary>
public sealed record UpdateWatchlistRequest
{
    public required int Id { get; init; }

    public required UpdateWatchlistParams Body { get; init; }
}
