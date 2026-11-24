using PrismaReviews.Core.Validation.Attributes;
using PrismaReviews.Models.AnyOf;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Requests.Reviews;

/// <summary>
/// The inputs of the ListReviews operation.
/// </summary>
public sealed record ListReviewsRequest
{
    /// <summary>
    /// Only reviews of this location.
    /// </summary>
    public string? LocationId { get; init; }

    /// <summary>
    /// Only reviews from this platform.
    /// </summary>
    public PlatformId? Platform { get; init; }

    /// <summary>
    /// Only reviews written at or after this time (by <c>created_at</c>): a date (<c>2026-10-01</c>, midnight UTC) or an ISO 8601 timestamp with a time zone offset (<c>2026-10-01T00:00:00Z</c>, <c>2026-10-01T02:00:00+02:00</c>).
    /// </summary>
    public Since? Since { get; init; }

    /// <summary>
    /// <c>true</c>: reviews with a reply in any status. <c>false</c>: reviews without one.
    /// </summary>
    public HasReply? HasReply { get; init; }

    /// <summary>
    /// Page size.
    /// </summary>
    [Minimum(1)]
    [Maximum(100)]
    public int Limit { get; init; } = 50;

    /// <summary>
    /// The <c>next_cursor</c> of the previous page.
    /// </summary>
    public string? Cursor { get; init; }
}
