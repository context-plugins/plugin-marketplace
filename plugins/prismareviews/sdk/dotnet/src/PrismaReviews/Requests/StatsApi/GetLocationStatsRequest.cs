using PrismaReviews.Models.AnyOf;

namespace PrismaReviews.Requests.StatsApi;

/// <summary>
/// The inputs of the GetLocationStats operation.
/// </summary>
public sealed record GetLocationStatsRequest
{
    /// <summary>
    /// Location ID (<c>loc_…</c>).
    /// </summary>
    public required string Id { get; init; }

    /// <summary>
    /// Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601 timestamp with offset. Default: 12 months before <c>until</c>.
    /// </summary>
    public Since? Since { get; init; }

    /// <summary>
    /// End of the period (not included). Default: now.
    /// </summary>
    public Until? Until { get; init; }
}
