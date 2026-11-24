using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

public record Usage
{
    [JsonPropertyName("plan")]
    public required Plan Plan { get; init; }

    /// <summary>
    /// The current month, <c>YYYY-MM</c> in UTC.
    /// </summary>
    [JsonPropertyName("period")]
    [RegularExpression("^\\d{4}-\\d{2}$")]
    public required string Period { get; init; }

    [JsonPropertyName("locations")]
    public required Locations Locations { get; init; }

    /// <summary>
    /// API requests this month from all of the workspace's keys, test keys included. Requests over the rate limit are not counted.
    /// </summary>
    [JsonPropertyName("requests")]
    public required int Requests { get; init; }

    /// <summary>
    /// Your per-key rate limit.
    /// </summary>
    [JsonPropertyName("requests_per_minute_limit")]
    public required int RequestsPerMinuteLimit { get; init; }

    /// <summary>
    /// Replies published through Prisma this month.
    /// </summary>
    [JsonPropertyName("replies_published")]
    public required int RepliesPublished { get; init; }

    [JsonPropertyName("paid_reads")]
    public required PaidReads PaidReads { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
