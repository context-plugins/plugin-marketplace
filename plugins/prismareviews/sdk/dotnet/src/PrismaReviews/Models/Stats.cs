using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models;

/// <summary>
/// Review statistics for a period, by when reviews were written. A reply counts once it is published.
/// </summary>
public record Stats
{
    /// <summary>
    /// Start of the period (included).
    /// </summary>
    [JsonPropertyName("since")]
    public required DateTimeOffset Since { get; init; }

    /// <summary>
    /// End of the period (not included).
    /// </summary>
    [JsonPropertyName("until")]
    public required DateTimeOffset Until { get; init; }

    /// <summary>
    /// The location filter, if any.
    /// </summary>
    [JsonPropertyName("location_id")]
    public required string? LocationId { get; init; }

    /// <summary>
    /// The platform filter, if any.
    /// </summary>
    [JsonPropertyName("platform")]
    public required string? Platform { get; init; }

    /// <summary>
    /// Reviews written in the period.
    /// </summary>
    [JsonPropertyName("reviews")]
    public required int Reviews { get; init; }

    /// <summary>
    /// Average of the 1–5 ratings, 2 decimals. <c>null</c> without rated reviews.
    /// </summary>
    [JsonPropertyName("average_rating")]
    public required double? AverageRating { get; init; }

    /// <summary>
    /// Reviews per star, <c>1</c> to <c>5</c>.
    /// </summary>
    [JsonPropertyName("ratings")]
    public required IReadOnlyDictionary<string, int> Ratings { get; init; }

    /// <summary>
    /// Reviews with a published reply.
    /// </summary>
    [JsonPropertyName("replied")]
    public required int Replied { get; init; }

    /// <summary>
    /// <c>replied / reviews</c>, 0 to 1. <c>null</c> without reviews.
    /// </summary>
    [JsonPropertyName("reply_rate")]
    public required double? ReplyRate { get; init; }

    /// <summary>
    /// Median time from review to reply, in hours, 1 decimal.
    /// </summary>
    [JsonPropertyName("median_reply_hours")]
    public required double? MedianReplyHours { get; init; }

    /// <summary>
    /// Reviews of 1 or 2 stars without a published reply.
    /// </summary>
    [JsonPropertyName("unreplied_negative")]
    public required int UnrepliedNegative { get; init; }

    /// <summary>
    /// One entry per calendar month (UTC) with reviews, oldest first.
    /// </summary>
    [JsonPropertyName("by_month")]
    public required IReadOnlyList<ByMonth> ByMonth { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
