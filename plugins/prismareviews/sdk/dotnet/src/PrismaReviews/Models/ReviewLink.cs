using System.Text.Json.Serialization;
using PrismaReviews.Core.Models;
using PrismaReviews.Models.Enums;

namespace PrismaReviews.Models;

public record ReviewLink
{
    /// <summary>
    /// The link.
    /// </summary>
    [JsonPropertyName("url")]
    public required string Url { get; init; }

    [JsonPropertyName("type")]
    public required TypePrismaReviewsLocationsApi Type { get; init; }

    [JsonExtensionData]
    public AdditionalProperties AdditionalProperties { get; init; } = [];
}
