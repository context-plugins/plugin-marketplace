using BundleSocial.Models.Enums;

namespace BundleSocial.Requests.Misc;

/// <summary>
/// The inputs of the MiscTiktokGetCommercialMusicTrendingList operation.
/// </summary>
public sealed record MiscTiktokGetCommercialMusicTrendingListRequest
{
    public required string TeamId { get; init; }

    /// <summary>
    /// Genre filter for commercial music results.
    /// </summary>
    public Genre Genre { get; init; } = Genre.Pop;

    /// <summary>
    /// Timeframe for popular tracks ranking.
    /// </summary>
    public DateRange DateRange { get; init; } = DateRange._7Day;
}
