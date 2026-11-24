using PrismaReviews.Models.AnyOf;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Requests.StatsApi;

/// <summary>
/// The inputs of the GetStats operation.
/// </summary>
public sealed record GetStatsRequest
{
    /// <summary>
    /// Only this location.
    /// </summary>
    public string? LocationId { get; init; }

    /// <summary>
    /// Only this platform.
    /// </summary>
    public PlatformId? Platform { get; init; }

    /// <summary>
    /// Start of the period, by when reviews were written: a date (midnight UTC) or an ISO 8601 timestamp with offset. Default: 12 months before <c>until</c>.
    /// </summary>
    public Since? Since { get; init; }

    /// <summary>
    /// End of the period (not included). Default: now.
    /// </summary>
    public Until? Until { get; init; }
}
