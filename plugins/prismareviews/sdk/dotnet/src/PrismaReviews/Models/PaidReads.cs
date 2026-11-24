using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models;

public record PaidReads
{
    /// <summary>
    /// Reads used this month by platforms read through paid data providers (Yelp, Tripadvisor, Booking.com…) on live connections.
    /// </summary>
    [JsonPropertyName("used")]
    public required int Used { get; init; }

    /// <summary>
    /// Reads included this month: the plan's plus read packs.
    /// </summary>
    [JsonPropertyName("limit")]
    public required int Limit { get; init; }

    /// <summary>
    /// One-off free reads (100 per account, never renewed) to try Google Maps and Tripadvisor with real data.
    /// </summary>
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)]
    [JsonPropertyName("free_trial")]
    public FreeTrial? FreeTrial { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
