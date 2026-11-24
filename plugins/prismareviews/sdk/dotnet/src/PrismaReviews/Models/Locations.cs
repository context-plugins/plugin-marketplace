using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;

namespace PrismaReviews.Models;

public record Locations
{
    /// <summary>
    /// Active live locations (test and disconnected ones are not counted).
    /// </summary>
    [JsonPropertyName("used")]
    public required int Used { get; init; }

    /// <summary>
    /// Locations of your plan plus the extra locations you pay for.
    /// </summary>
    [JsonPropertyName("limit")]
    public required int Limit { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
