using Compabase.Core.Validation.Attributes;

namespace Compabase.Requests.Watchlist;

/// <summary>
/// The inputs of the GetWatchlist operation.
/// </summary>
public sealed record GetWatchlistRequest
{
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 20;

    [Minimum(0)]
    public int Offset { get; init; } = 0;
}
