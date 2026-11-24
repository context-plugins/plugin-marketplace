namespace Perigon.Requests.Watchlists;

/// <summary>
/// The inputs of the GetWatchlist operation.
/// </summary>
public sealed record GetWatchlistRequest
{
    public required int Id { get; init; }
}
