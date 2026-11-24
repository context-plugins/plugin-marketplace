using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models;

public record ByMonth
{
    /// <summary>
    /// <c>YYYY-MM</c>.
    /// </summary>
    [JsonPropertyName("month")]
    public required string Month { get; init; }

    [JsonPropertyName("reviews")]
    public required int Reviews { get; init; }

    [JsonPropertyName("average_rating")]
    public required double? AverageRating { get; init; }

    [JsonPropertyName("replied")]
    public required int Replied { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
