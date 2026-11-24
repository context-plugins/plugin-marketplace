namespace Perigon.Requests.Watchlists;

/// <summary>
/// The inputs of the DeleteWatchlist operation.
/// </summary>
public sealed record DeleteWatchlistRequest
{
    public required int Id { get; init; }
}
